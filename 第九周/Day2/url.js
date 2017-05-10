// 处理特定的完整 url
let url = require('url');
let address = 'https://www.baidu.com:8080/index?wd=liwenli&id=3';
let urlObj = url.parse(address, true); //解析url 第二个参数为true 会将query解析成key:value 形式

console.log(urlObj.pathname);
console.log(urlObj.query);


// {wd:val}
// let reg = /([^?&=]+)=([^?&=]+)/g;
// console.log(reg.exec('wd=liwenli&id=3'));
// console.log(reg.exec('wd=liwenli&id=3'));

// let paramObj = {};
// urlObj.query.replace(reg, function () {
//     // console.log(arguments[1]);
//     paramObj[arguments[1]] = arguments[2];
// });
// console.log(paramObj.wd);
