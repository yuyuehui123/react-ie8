const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["es5-shim", "es5-shim/es5-sham", "console-polyfill", "fetch-ie8", "./jsx/app.jsx"],
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        color: true,
        reasons: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ['es3ify-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                loader: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        { loader: 'less-loader'},
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /(node_modules)/,
                loader: ['url-loader']
            }
        ]
    },
    plugins: [
        new es3ifyPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            inject: false
        }),
        new ExtractPlugin('style.css'),
        //new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname, //网站的根目录为 根目录/dist，这个路径一般与output.path一致，因为html插件生成的html5页是放在output.path这个目录下
        port: 8008, //端口改为9000
        open:true, // 自动打开浏览器，每次启动服务器会自动打开默认的浏览器
        index:'index.html', // 与HtmlWebpackPlugin中配置filename一样
        inline:true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        hot:true,
        host: '192.168.1.39',
        //compress:true, //压缩
        overlay: true
    }
};