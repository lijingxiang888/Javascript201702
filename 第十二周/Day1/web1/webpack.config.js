let path = require('path');

module.exports = {
    entry: './src/main.js', // 入口
    output: { // 出口
        filename: 'bundle.js',
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
            {
                test: /\.css$/,
                // loader: 'css-loader'
                // loader: 'style-loader!css-loader', // 多个loader写法
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
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
        alias: {
            'vue$': 'vue/dist/vue.common.js', // 导入独立构建版本
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
        }
    },
    // 配置devServer
    devServer:{
        noInfo: true // 隐藏编译信息
    }
};