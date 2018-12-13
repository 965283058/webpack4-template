var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.conf')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const rootDir = process.cwd()

var port = process.argv.slice(3).pop() || 8080
module.exports = merge(webpackBaseConfig, {
    mode: 'development',//开发模式
    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"develop"',
                API_ROOT: '"/webapi"',
                ROUTER_ROOT: '"/"',
                SENSORS_SERVER: '"/"',
                SENSORS: '"https://hbdata.houbank.com/sa?project=default"',
            }
        }),
        /* new AddAssetHtmlPlugin({
             filepath: path.join(rootDir, 'build/dll', 'base.dll.js'),
             includeSourcemap: false
         }),*/
        /*new webpack.DllReferencePlugin({
            context: rootDir,
            manifest: require(path.join(rootDir, 'build/dll', 'manifest.json'))
        })*/
    ],
    devServer: {
        index:'index.html',
        headers: {
            'x-webpack-server': true
        },
        logLevel:'warn' //只输出`警告`级别以上的日志
    },
    server: {
        port: 9003, // server port
        proxy: {
            // host: 'https://m.houbank.com/', // proxy url
            host: 'http://mrelease05.houbank.net', // proxy url
            match: /^\/webapi\//   // proxy match regexp
        }
    }
})
