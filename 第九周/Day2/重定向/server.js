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
<<<<<<< HEAD
=======


>>>>>>> 17d4fe2fbdecd2ae55750332c50b1aa4f12e1a11
        // res.setHeader('location', 'https://www.sogou.com');
        // res.statusCode = 302;
        // res.end();
    }
}).listen(3000);
