let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname} = url.parse(req.url);
    if (pathname === '/') {
        res.writeHead(302, {
            location: '/test'
        });
        res.end();
        return;
    }

    if(pathname === '/test') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let result = fs.readFileSync('./test.html');
        res.end(result);
    }
}).listen(7000);
