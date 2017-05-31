let path = require('path');
let webpack = require('webpack');
// console.log(webpack);
// 第三方安装webpack plugin
let HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件
let ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将css单独打包

module.exports = {
    // entry: './src/main.js', // 入口
    entry: {// 多入口
        chunk1: './src/main.js',
        chunk2: './src/main2.js'
    },
    output: { // 出口
        // filename: 'bundle.js',
        // filename: '[name].js',
        filename: '[name].[hash].js', // 添加hash值 main.hash.js
        path: path.resolve(__dirname, './dist')
    },
    module: { // 加载规则配置
        rules: [
            // 将es6 转换成 es5
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ // 排除某些内容
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.css$/,
            //     // loader: 'css-loader'
            //     // loader: 'style-loader!css-loader', // 多个loader写法
            //     loader: ["style-loader", "css-loader"]
            // },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract({use: 'css-loader'})
            },
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!less-loader'
            // },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({use: 'css-loader!less-loader'})
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     loader: 'file-loader'
            // },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff2|woff|ttf)$/,
                loader: 'url-loader',
                // loader: 'url-loader?limit=5000&name=[name].[ext]?[hash]',
                options: {
                    limit: 10000, // 10kb以下的图片 进行base64编码
                    name: '[name].[ext]?[hash]' // 重写文件名
                }
            }
        ]
    },
    devtool: '#eval-source-map', // 生成一个source map文件 存储编译前代码位置信息 便于在源文件中调试,
    resolve: {
        extensions: ['.js','.css', '.vue', '.less'], // 省略扩展名配置
        alias: {
            'vue$': 'vue/dist/vue.common.js', // 导入独立构建版本
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
        }
    },
    // 配置devServer
    devServer:{
        noInfo: true, // 隐藏编译信息
        // hot: true // 开启热替换 但是需要配合 new webpack.HotModuleReplacementPlugin(),
    },
    plugins: [ // webpack plugins
        // new HtmlWebpackPlugin()
        // new webpack.optimize.UglifyJsPlugin({ // 生产后使用
        //     sourceMap: true,
        //     compress: {
        //         warnings: false // 删除调试语句
        //     }
        // }), // 压缩资源文件
        // new webpack.HotModuleReplacementPlugin(), // 开启模块热替换 配合 hot：true
        new HtmlWebpackPlugin({
            title: 'hello liwenli', // 页面title
            favicon: './src/assets/logo.png', // 页面页卡图标
            template: './index.html', // 指定一个html模板
            // chunks: ['main'], // 指定依赖
            // chunks: ['chunk1', 'chunk2']
            chunks: ['common','chunk1', 'chunk2']
            // inject: 'head' // 存放位置 默认body
            // chunks: ['chunk1'] // 指定依赖
        }),
        new webpack.optimize.CommonsChunkPlugin('common'), // 提取多入口中的公共模块
        new ExtractTextPlugin('index.css') // 将css单独打包

    ]
};

console.log(process.env.NODE_ENV); //  development production区分生成和开发的环境标识

if(process.env.NODE_ENV === 'production') { // 生成环境下
    console.log('this is production!!!');
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({ // 生产后使用
            sourceMap: true,
            compress: {
                warnings: false // 删除调试语句
            }
        }) // 压缩资源文件
    ])
}