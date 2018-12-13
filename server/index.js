const koa2 = require('koa2')
const koaConvert = require("koa-convert")
const bodyParser = require('koa-bodyparser');
const path = require('path')
const chalk = require('chalk')
const https = require('https');
const http = require('http');
const fs = require('fs');
const mime = require('mime');
const proxy = require('koa-proxy')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const koaHotMiddleware = require('./koa-hot-middleware')
const koaDevServerMiddleware = require('./koa-dev-server-middleware')
const config = require(path.resolve('./build/webpack.dev.conf.js'))

const app = new koa2()
let serverConfig = Object.assign({}, {port: 8080}, config.server)
let port = Number.parseInt(process.argv[2]) || serverConfig.port


config.plugins = config.plugins || []
config.devServer = config.devServer || {}
config.devServer.hot = true
config.devServer.publicPath = config.output.publicPath

if (Array.isArray(config.entry)) {
    config.entry.unshift('webpack-hot-middleware/client')
} else {
    for (let key of Object.keys(config.entry)) {
        config.entry[key].unshift('webpack-hot-middleware/client?reload=true')
    }
}

config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

if (process.argv.slice(2).join("").includes("show")) {
    config.plugins.push(new BundleAnalyzerPlugin())
}

delete config.server


if (serverConfig.proxy) {
    app.use(koaConvert(proxy(serverConfig.proxy)))
}

let compiler = webpack(config)

app.use(koaDevServerMiddleware(compiler, config.devServer))

app.use(koaHotMiddleware(compiler, {
    log: function () {
        if (arguments[0].indexOf('building') > -1) {
            return
        }
        console.log(chalk.gray(" > " + arguments[0]))
    }
}))


app.use(bodyParser());

app.use(async (ctx, next) => {
    if (ctx.path.indexOf('/static') == 0) {
        ctx.body = await readDiskFile(path.join(process.cwd(), ctx.path))
        ctx.type = mime.getType(ctx.path.split('.').pop())
    } else {
        await next()
    }
})


app.use(async (ctx, next) => {
    ctx.body = await readFile(path.join(compiler.outputPath, 'index.html'))
    ctx.type = "text/html"
    await next()
})

app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }

    console.log(chalk.blue(' # Access URLs:'))
    console.log(chalk.gray(' ----------------------------------------'))
    console.log('     Local: ' + chalk.green('http://localhost:' + port))
    console.log(chalk.gray(' ----------------------------------------'))
    console.log('')
})

async function readFile(filepath) {
    return new Promise(function (resolve, reject) {
        compiler.outputFileSystem.readFile(filepath, function (err, result) {
            if (err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

async function readDiskFile(filepath) {
    return new Promise(function (resolve, reject) {
        fs.stat(filepath, function (err, stats) {
            if (!err) {
                if (stats.isFile()) {
                    resolve(fs.createReadStream(filepath))
                } else {
                    resolve("403")
                }
            } else {
                reject(err)
            }
        })

    })
}

async function reqData(opts) {
    var options = {
        hostname: opts.host,
        port: 80,
        path: opts.path,
        method: opts.method || 'GET',
        headers: opts.headers || {}
    }
    let net = http
    if (opts.https) {
        options.port = 443
        net = https
    }
    return new Promise(function (resolve, reject) {
        var req = net.request(options, function (res) {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData)
                } catch (e) {
                    resolve(rawData)
                }
            });
        });
        req.on('error', function (e) {
            reject(e)
        });
        if (opts.data) {
            req.write(opts.data);
        }
        req.end();
    })
}

