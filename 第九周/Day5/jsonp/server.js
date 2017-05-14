let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
    if(pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
        return;
    }

    if(pathname === '/getTime') {
        console.log(query.cb);
        // 通过查询参数中的cb 字段 得到 前端传给后台的回调函数名
        let fnName = query.cb;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        let time = new Date().toLocaleString();
        let timeStr = JSON.stringify({time});
        // res.end(JSON.stringify({time}));
        res.end(`${fnName}(${timeStr})`); // getTime(timeStr)
    }

}).listen(3000, function () {
    console.log('监听3000端口');
});
