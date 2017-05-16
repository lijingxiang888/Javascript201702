let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
    // CORS跨域资源共享 需要服务端设置
    // '*' 所有都可以跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 可以指定某个服务跨域
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    if(pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
        return;
    }

    if(pathname === '/getTime') {
        // 通过查询参数中的cb 字段 得到 前端传给后台的回调函数名
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        let time = new Date().toLocaleString();
        res.end(JSON.stringify({time}));
    }

}).listen(3000, function () {
    console.log('监听3000端口');
});
