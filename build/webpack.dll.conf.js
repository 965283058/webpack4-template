const path = require('path')
const webpack = require('webpack')
const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',//开发模式
    entry: {
        base: ['vue', 'vue-router','vue-http','alloyfinger',
            'html-entities','core-js','querystring','vue-hot-reload-api','ansi-html']
    },
    output: {
        path: path.join(__dirname, "dll"),
        filename: "[name].dll.js",
        library: "[name]_library"
    },
    resolve: {
        extensions: [".js", ".vue", ".css", ".json"],//自动查询的后缀名
        alias: {//全局引用快捷变量
            'vue': path.join(process.cwd(), '/node_modules/vue/dist/vue.runtime.common.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                px2rem({remUnit: 75})
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }]

            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            query: {
                                limit: 3,
                                name: 'fonts/[name].[hash:7].[ext]'
                            }
                        }
                    }
                ]
            }
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