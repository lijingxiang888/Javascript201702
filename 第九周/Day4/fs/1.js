// fs 内置的文件系统模块
let fs = require('fs');
// 同步读取
// let resHtml = fs.readFileSync('./index.html', 'utf8'); // 默认读取出来的的buffer
// console.log(resHtml);
// console.log(123123);

// 异步
/**
 * callBack
 *   @param1 err 错误信息 如读取成功 null
 *   @param2 result 读取到的内容
 */
// let resHtml = fs.readFile('./index.html', 'utf8', function (err, result) {
//     // console.log(err);
//     if(err) {
//         console.log(err);
//     } else {
//         // console.log(result);
//     }
// });
// console.log(resHtml);
//
// console.log('后面的代码');


// let resJson = fs.readFileSync('./data.json', 'utf8');
// console.log(resJson);

// fs.readFile('./data.json', 'utf8', function (err, result) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });
/**
 * @param1 fd 文件路径
 * @param2 context 写入内容
 * @param3 options
 *  {
 *  encoding: 'utf8' 默认utf8
 *  flag : 'w' 默认参数w 写入并将原有覆盖 a 追加
 *  }
 *  async callBack
 */

// fs.writeFile('./data.txt', '珠峰培训',{flag: 'a'},function (err) {
//     console.log(err);
// });
let obj = {
    name: 'zhufengnode',
    id: 1
};
// let resData = fs.readFileSync('./data2.txt');
let err = fs.writeFileSync('./data.txt', JSON.stringify(obj),{
    encoding: 'utf8'
});
console.log(err);