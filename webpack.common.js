const path = require('path');
// const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                        // cacheDirectory: true,
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    // 'file-loader',//加载图片资源
                    {
                        loader: 'url-loader', //替换file-loader,能设置一个阈值压缩base64
                        options: {
                            limit: 8192
                        }
                    },
                    {
                        loader: 'image-webpack-loader', //对图片进行压缩
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            // path:[],
        }), //默认清理output文件夹,文档用的这个插件老版本
        new HtmlWebpackPlugin({
            title: 'haha-k:Output Management',
            //  filename: 'xxx.html', //文件名
            // template:path.resolve(__dirname,'src/main.html'),//设置模板
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
            },
        }), //生成html的插件
    ]
}