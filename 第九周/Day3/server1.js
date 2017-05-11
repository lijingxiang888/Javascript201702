let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function (req, res) {
    // 通过解析后的query 得到 get请求发送的数据
    let {pathname, query} = url.parse(req.url, true);
    if (pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./form.html');
        res.end(resHtml);
    }

    if (pathname === '/submitData') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            // console.log(query); // 接收 get请求向服务端发送的数据
            res.end(JSON.stringify(query));
        } else if (req.method === 'POST') {
            let str = '';
            // 接收请求体内容
            req.on('data', function (data) {
                str += data;
            });
            // 接收完毕后 触发
            req.on('end', function () {
                res.end(str);
            });
        }
    }

}).listen(7000, function () {
    console.log('监听7000端口');
});

