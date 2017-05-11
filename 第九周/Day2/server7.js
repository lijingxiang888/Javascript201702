let http = require('http'); // 内置模块
let fs = require('fs');
let url = require('url');
let mime = require('mime'); // 第三方模块 解析文件mime类型

let server1 =require('./server4.js'); // 自定义模块 加path

let server2 =require('./server4.js'); // 自定义模块

http.createServer(function (req, res) {
    // console.log(req.url); // /?name=liwenli&uid=1 包含路径和？后面查询参数
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname; // 解析后的请求路径
    if (pathname === '/' || pathname === '/index.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let result = fs.readFileSync('./index3.html');
        res.end(result);
        return;
    }

    // 其他静态资源请求处理
    let flag = fs.existsSync('.' + pathname);
    if (flag) {
        console.log(mime.lookup(pathname));
        let result = fs.readFileSync('.' + pathname);
        res.setHeader('Content-Type', mime.lookup(pathname)+ ';charset=utf8');
        res.end(result);
    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf8');
        res.statusCode = 404;
        res.end('NOT FOUND页面 跑到火星去了~~');
    }

}).listen(8000);
