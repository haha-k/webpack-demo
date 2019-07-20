const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [{
                        loader: "style-loader" //将js字符串生成为style节点
                    },
                    {
                        loader: "css-loader", //将css转化为CommonJs模块
                        options: {
                            sourceMap:true
                        }
                    },
                    {
                         loader: "postcss-loader",
                         options: {
                             ident:'postcss',
                             sourceMap:true,
                             plugins:(loader)=>[
                                 require('autoprefixer')({browsers:['> 0.15% in CN']}),
                             ]

                         }
                    },
                    {
                        loader: "sass-loader", //将sass编译成css
                        options: {
                            sourceMap:true
                        }
                    },
                ]
            }
        ]
    }
}