const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'


const extractSass = new MiniCssExtractPlugin({
            filename:devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
});//设置生产环境css分离

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
                use: [
                    devMode ? {
                        loader:"style-loader"
                    }
                    :
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            hmr:process.env.NODE_ENV === 'development',
                        }
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
    },
    plugins:[
        extractSass
    ],
}