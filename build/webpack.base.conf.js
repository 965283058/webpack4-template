const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.argv.includes("--dev")

module.exports = {
    entry: {
        main: [path.resolve(process.cwd(), 'src/entry.js')]
    },
    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'dist')
    },
    resolve: {
        extensions: ['.js', '.css', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.runtime.common.js',
            'pages': path.resolve(process.cwd(), 'src/pages'),
            'plugins': path.resolve(process.cwd(), 'src/plugins'),
            'fonts': path.resolve(process.cwd(), 'src/fonts'),
            'components': path.resolve(process.cwd(), 'src/components'),
            'apis': path.resolve(process.cwd(), 'src/apis'),
            'utils': path.resolve(process.cwd(), 'src/utils'),
            'constants': path.resolve(process.cwd(), 'src/constants'),
            'sensors': path.resolve(process.cwd(), 'src/sensors'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        /*loaders: {
                            js: 'babel-loader'
                        },*/
                        /* cssModules: {
                             localIdentName: '[path][name]-[local]-[hash:base64:5]',
                             camelCase: true
                         },*/
                        postcss: [

                        ]
                    }
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
                    // isDev ? {} : {loader: MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        // options: {importLoaders: 1} 好像没卵用
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // isDev ? null : autoprefixer({browsers: ["Android >= 3", "iOS >= 7"]}),
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
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(process.cwd(), 'index.html'),
            minify: {//使用`html-minifier`插件的参数
                removeComments: true,//去除html页面注释
                minifyJS: true,//压缩html中的JS
                minifyCSS: true,//压缩html中的CSS
                removeAttributeQuotes: false, // 移除属性的引号
                collapseWhitespace:true
            },
            chunksSortMode: 'none' //页面外链资源排序方式
        }),
    ]
}
