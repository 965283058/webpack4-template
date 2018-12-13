const webpackDevMiddleware = require('webpack-dev-middleware')

module.exports = function (compiler, serverConfig) {
    let devServer = webpackDevMiddleware(compiler, serverConfig)

    async function koaDevMiddleware(ctx, next) {
        let req = ctx.req
        let result = await middleware(devServer, req, {
            end(body) {
                ctx.body = body
            },
            setHeader() {
                ctx.set.apply(ctx, arguments)
            }
        })
        if (result) {
            await next()
        }
    }

    async function middleware(originalDevServer, req, res) {
        let originalEnd = res.end
        return new Promise((resolve, reject) => {
            res.end = function () {
                originalEnd.apply(this, arguments)
                resolve(false)
            }
            originalDevServer(req, res, () => {
                resolve(true)
            })
        })
    }

    Object.keys(devServer).forEach(key => {
        koaDevMiddleware[key] = devServer[key]
    })

    return koaDevMiddleware

}