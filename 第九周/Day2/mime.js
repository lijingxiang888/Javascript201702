// 当前项目目录下 打开命令窗口 npm install mime --save

let mime = require('mime');
// console.log(mime);
console.log(mime.lookup('ssdf8.js')); // 解析出指定文件的 mime类型