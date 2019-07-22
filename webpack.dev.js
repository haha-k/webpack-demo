const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

let devConfig = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map', //启用js sourceMap
    devServer: {
        clientLogLevel: 'none',
        contentBase: path.join(__dirname, "public"), //告诉服务器从哪里提供内容,默认当前工作目录
        compress: true, //一切服务都启用gzip压缩
        hot: true, //启用webpack的模块热替换特性
        host: '0.0.0.0', //指定一个host,默认为localhost
        open: true, //是否打开浏览器
        overlay: { // 出现错误或者警告时，是否全屏显示错误
            warnings: true,
            errors: true,
        },
        port: 8088, //端口
        publicPath: '/', //此路径下的打包文件可在浏览器中访问
        proxy: { //代理
            "/api": {
                target: "http://localhost:8000",
                pathRewrite: {
                    "^api": "",
                }
            } //访问 /api/users 代理到 http://localhost:8000/users
        },
        quiet: false, //启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
        watchOptions: {
            poll: true, //开启polling,或者指定毫秒为单位进行轮询，1000
            ignored: /node_modules/, //忽略文件夹
            aggregateTimeout: 300 //当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
        }
    },
    module: {
        rules: [{
            test: /\.(sc|c|sa)ss$/,
            use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", //将css转化为CommonJs模块
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        ident: 'postcss',
                        sourceMap: true,
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: ['> 0.15% in CN']
                            }), //自动加前缀
                        ]

                    }
                },
                {
                    loader: "sass-loader", //将sass编译成css
                    options: {
                        sourceMap: true
                    }
                },
            ]
        }]
    },
    plugins :[
        new webpack.NamedModulesPlugin(),//更容易查看（patch）的依赖
        new webpack.HotModuleReplacementPlugin() //替换插件
    ]
};

module.exports = merge(common,devConfig);