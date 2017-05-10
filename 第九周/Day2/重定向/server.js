let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname} = url.parse(req.url);
    if(pathname === '/') {
        // res.setHeader('Content-Type', 'text/html;charset=utf-8');

        var result = fs.readFileSync('./test.html');
        res.end(result);
        res.writeHead(302, {
            Location: 'https://www.baidu.com'
        });
    }
}).listen(3000);
