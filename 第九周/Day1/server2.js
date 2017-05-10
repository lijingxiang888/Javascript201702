// http 搭建server
let http = require('http');//引入http模块
let fs = require('fs');//引入读取文件的模块

// http.createServer(function (req, res){
//      res.setHeader('Content-type', 'text/plain;charset=utf-8');
//      res.write('nihao'); // 响应体写入内容
//      res.end(' 我是小虾'); // 结束响应并返回一些东西
//     console.log(123);
// }).listen('8090');
var mimeType = {
    'js': 'application/javascript;charset=utf-8',
    'css': 'text/css;charset=utf-8'
};

http.createServer(function (req, res){
    if(req.url === '/') {
       res.end(' nihao  zhufeng');//响应体
    }

    if(req.url === '/index1.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');//响应头
        let result = fs.readFileSync('./index1.html');// 默认读取 的是buffer
        res.end(result); // 内容 string buffer
    }
    if(req.url === '/index1.css') {
        res.setHeader('Content-Type', 'text/css;charset=utf-8');
        let resCss = fs.readFileSync('./index1.css');
        res.end(resCss);
    }
    if(req.url === '/index1.js') {
        res.setHeader('Content-Type', 'application/javascript;charset=utf-8');
        let resJs = fs.readFileSync('./index1.js');
        res.end(resJs);
    }

}).listen('8090');

// 处理多个请求