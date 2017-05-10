let http = require('http');
let fs = require('fs');
// 根据客户端请求路径 返回相应html页面
// 需要请求路径 作为判断依据 做出相应的处理
http.createServer(function (req, res) {
    console.log(req.url); // 客户端请求路径
    if(req.url === '/' || req.url === '/index.html') { // 如果请求的是根路径
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var result = fs.readFileSync('./index.html'); // 默认读取出来的是buffer格式
        res.end(result); // string buffer
    }

    if(req.url === '/liwenli') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var result = fs.readFileSync('./index1.html');
        res.end(result);
    }
    if(req.url === '/zhufeng') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var result = fs.readFileSync('./index2.html');
        res.end(result);
    }
}).listen(7070, function () {
    console.log('监听7070端口');
});


