let path = require('path'); // 操作路径

// 需要导出的配置对象
module.exports = {
   // entry: './src/index.js', // 入口 编译单文件
   entry: { // 多入口
       index: './src/index.js',
       main: './src/main.js'
   },
   output: {  // 输出
       path: path.resolve(__dirname, './dist'), // 指定输出路径(绝对的目录路径)
       // filename: 'bundle.js' // 指定编译后的文件名 '[name].js',默认编译后main.js
       filename: '[name].js', // 入口文件key 作为name名
       publicPath: '/build/' // 手工指定server资源输出后的存放路径
   }
};

// console.log(__dirname); // 当前文件所在的目录的绝对路径
// console.log(__filename); // 当前文件的绝对路径

// console.log(path.resolve(__dirname, './dist')); // 解析出‘./dist'绝对路径
// console.log(path.join(__dirname, './dist'));