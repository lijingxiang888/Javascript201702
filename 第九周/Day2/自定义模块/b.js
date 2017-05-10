let path = require('path');

let obj1 = require('./a.js');
// console.log(require.cache);// cache是模块缓存信息对象 属性名 是模块的绝对路径
console.log(path.resolve('./a.js')); // 获取当前文件的绝对路径

// 清除模块 缓存
delete require.cache[path.resolve('./a.js')];

let obj2 = require('./a.js');
delete require.cache[path.resolve('./a.js')];
let obj3 = require('./a.js');
console.log(obj1);

