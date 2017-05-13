// http 内置模块 搭建server
let http = require('http');
let fs = require('fs');
let mime = require('mime'); // 第三方模块
// console.log(mime);
/**
 * req 代表客户端请求对象
 * res 代表的是服务端响应对象
 */
http.createServer(function (req, res) {
    let pathname = req.url;
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
        return;
    }
    // 其他的静态资源请求处理
        console.log(pathname);
    // 先查找下 当前 存不存在这个文件
        let flag = fs.existsSync('.'+pathname);
        if(flag) {
            res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
            let resJs = fs.readFileSync('.' + pathname); // ./index1.js
            res.end(resJs);
        } else { // 处理不存在的资源
            res.statusCode = 404;
            res.end('404 NOT FOUND');
        }



        // res.end('hello server!'); // 结束响应
}).listen(9090, function () {
    console.log('监听9090端口');
});
