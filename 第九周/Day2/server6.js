let http = require('http');
let fs = require('fs');
let url = require('url');

const MIME = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.jpg': 'image/jpg',
};

http.createServer(function (req, res) {
    console.log(req.url); // /?name=liwenli&uid=1 包含路径和？后面查询参数
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname; // 解析后的请求路径
    console.log(urlObj.query); // 查询参数
    console.log(pathname);
    if (pathname === '/' || pathname === '/index.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var result = fs.readFileSync('./index3.html');
        res.end(result);
        return;
    }

    // 其他静态资源请求处理
    let flag = fs.existsSync('.' + pathname);
    if (flag) {
        var result = fs.readFileSync('.' + pathname);
        // index3.css
        var suffix = /(\.[a-zA-Z]+$)/.exec(pathname)[1];
        res.setHeader('Content-Type', MIME[suffix] + ';charset=utf8');
        res.end(result);
    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf8');
        res.statusCode = 404;
        res.end('NOT FOUND页面 跑到火星去了~~');
    }

}).listen(7000);

// fs.exists() 根据路径判断文件是否存在
// 异步判断
// fs.exists('./index5.html', function (result) {
//      console.log(result);
// });
// // 同步判断
// console.log(fs.existsSync('./index5.html'));