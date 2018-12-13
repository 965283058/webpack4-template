const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const optimizeCssPlugin = require("optimize-css-assets-webpack-plugin")
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;


module.exports = merge(webpackBaseConfig, {
    mode: "production",
    output: {
        filename: 'js/[name].[chunkhash:7].js',
        chunkFilename: 'js/[name].[chunkhash:7].js',
        publicPath: '/',
        // publicPath:'https://static.houbank.com/hb-wap/',
    },
    optimization: {
        splitChunks: {//把JS中公共代码抽离出来
            name: true,
            maxInitialRequests: 5,//entry文件请求的chunks不应该超过此值（请求过多，耗时）
            maxAsyncRequests: 3, //异步请求的chunks不应该超过此值
            cacheGroups: {
                vendors: {
                    name: "vendors",
                    test: /\/node_modules\//,
                    chunks: "all",
                    minChunks: 1, //模块被引用1次则抽离出来成为单独的.js文件
                    priority: 100 //优先级，多个分组冲突时决定把代码放在哪块
                },
                commons: {
                    name: "commons",
                    test: /\/src\/.*\.js/,
                    chunks: "all",
                    minChunks: 2,//模块被引用2次或2次以上则抽离出来成为单独的.js文件
                    priority: 10,
                    // reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new WebpackDeepScopeAnalysisPlugin(),
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,//匹配所有JS
                extractComments: true//去除JS中的注释,提取到一个单独文件
            }),//压缩JS
            new optimizeCssPlugin()//压缩CSS
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                API_ROOT: '"/webapi"',
                ROUTER_ROOT: '"/"',
                SENSORS_SERVER: '""',//神策埋点后端服务器地址
                SENSORS: '"https://hbdata.houbank.com/sa?project=production"',//神策埋点服务器地址
            }
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: path.resolve(webpackBaseConfig.output.path, 'static'),
            ignore: ['.*']
        }]),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contentHash:7].css",
            chunkFilename: "css/[name].[contentHash:7].css"
        })
    ]
})
