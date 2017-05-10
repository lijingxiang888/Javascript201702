let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/index3.html') {
        res.setHeader('Content-type', 'text/html;charset=utf-8');
        // var resutl = fs.readFileSync('./index3.html');
        fs.readFile('./index3.html', function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.end(data);
            }
        });
    }
    // 如果请求的是/index3.css
    if (req.url === '/index3.css') {
        res.setHeader('Content-Type', 'text/css;charset=utf-8');
        var result = fs.readFileSync('./index3.css'); // './index3.css'
        res.end(result); // 结束响应并返回给客户端
    }

    if (req.url === '/index3.js') {
        res.setHeader('Content-Type', 'application/javascript;charset=utf-8');
        var result = fs.readFileSync('./index3.js');
        res.end(result);
    }
    if (req.url === '/node.jpg') { //如果客户端请求的路径是'/node.jpg'
        res.setHeader('Content-Type', 'image/jpg');
        fs.readFile('./node.jpg', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data);
                }
            }
        )
    }


}).listen(3000, function () {
    console.log('监听')
});
