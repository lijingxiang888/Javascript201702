let http = require('http');
let fs = require('fs');
console.log('server 4');
const MIME = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.jpg': 'image/jpg',
};

http.createServer(function (req, res) {
    if(req.url === '/' || req.url === '/index.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var result = fs.readFileSync('./index3.html');
        res.end(result);
        return;
    }

    // 其他静态资源请求处理
    var result = fs.readFileSync('.' + req.url);
    // index3.css
    var suffix = /(\.[a-zA-Z]+$)/.exec(req.url)[1];
    res.setHeader('Content-Type', MIME[suffix] + ';charset=utf8');
    res.end(result);
}).listen(7080);