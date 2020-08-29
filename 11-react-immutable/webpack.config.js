const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //指定环境
    mode:'development',
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'[name]-[hash]-bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|jpeg|png|gif)$/i,
                use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit:10
                            }
                        }
                ]
            },
            //babel
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                        loader:'babel-loader',
                        options:{
                            presets:['env','react'],
                            plugins:[
                                [
                                    "import",
                                    {
                                        "libraryName":"antd",
                                        "libraryDirectory":"es",
                                        "style":"css"
                                    }
                                ]
                            ]
                        }
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',//模板文件
            filename:'index.html',//输出的文件名
            // inject:head,//脚本写在哪个标签里，默认是true，在body之后
            hash:false //给生成的js/css文件添加唯一一个的hash
        }),
        new CleanWebpackPlugin()
    ],
    // webpack-dev-server提供了一个简单的基于node express的web服务器,能够实时重新加载页面
    devServer:{
        contentBase:'./dist',//内容的目录
        port:8083//服务器运行的端口
    }    
}