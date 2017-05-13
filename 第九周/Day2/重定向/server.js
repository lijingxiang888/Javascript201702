let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname} = url.parse(req.url);
    if (pathname === '/') {
        res.writeHead(302, {
            location: 'https://www.baidu.com'
        });
        res.end();
        // res.setHeader('location', 'https://www.sogou.com');
        // res.statusCode = 302;
        // res.end();
    }
}).listen(3000);
