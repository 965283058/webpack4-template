const path = require('path')
const webpack = require('webpack')
const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        base: ['vue', 'vue-router','vue-http','vt-loading','vue2-filters','vt-toast','vt-message',
            'alloyfinger','crypto-js','html-entities','core-js','querystring','vue-hot-reload-api','ansi-html','alloyfinger']
    },
    output: {
        path: path.join(__dirname, "dll"),
        filename: "[name].dll.js",
        library: "[name]_library"
    },
    resolve: {
        extensions: ['', ".js", ".vue", ".css", ".json"],//自动查询的后缀名
        alias: {//全局引用快捷变量
            'vue': path.join(process.cwd(), '/node_modules/vue/dist/vue.runtime.common.js')
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loader: 'style!css?-autoprefixer!postcss'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    babel: {
        presets: ['env', 'stage-0'],
        plugins: [
            [
                "diff-platform",
                {
                    "platform": "mobile"
                }
            ],
            'transform-vue-jsx',
            'transform-runtime'
        ]
    },
    vue: {
        postcss: [
            autoprefixer({
                browsers: ["Android >= 3", "iOS >= 7"]
            }),
            px2rem({
                remUnit: 75
            })
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            context: process.cwd(),
            path: path.join(process.cwd(), '/build/dll', "manifest.json"),
            name: "[name]_library",
        })
    ]
}