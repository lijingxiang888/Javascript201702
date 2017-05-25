
let path = require('path');
let webpack = require('webpack');


module.exports = {
    // entry: './src/index.js',
    entry: {
       main: './src/index.js',
       main2: './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif|jpe?g|svg|woff2|woff|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'bootstrap$': 'bootstrap/dist/css/bootstrap.css'
        }
    },
    devServer: {
        // hot: true,
        // port: 9000
    },
    devtool: '#eval-source-map', // 便于调试
    plugins: [
         // new webpack.optimize.CommonsChunkPlugin('common') // 提取公共部分
    ]
};





console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({ // 定义全局标识 便于在js中使用
            'process.env': {
                NODE_ENV: '"production"'
            },
            liwenli: '"我是全局变量"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
    ]);
    // Loaders 最小化文件的模式
    new webpack.LoaderOptionsPlugin({
        minimize: true
    });
    module.exports.devtool = '#source-map';
}



