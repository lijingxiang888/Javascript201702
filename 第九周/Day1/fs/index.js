/**
 * Created by cuiyang on 2017/5/9.
 */
let fs = require('fs');
// console.log(fs); // fs文件系统

// 同步读取
// var result = fs.readFileSync('./index.html', 'utf8');
// console.log(result);
// console.log(123);

// 异步读取 默认读取出来的是buffer格式
 fs.readFile('./index.html', 'utf8', function (err, result) {
     // console.error(err); // 没有错误提示 null / undefined
      if(err) {
          console.error(err);
      } else {
          console.log(result);
      }
});

console.log(123);