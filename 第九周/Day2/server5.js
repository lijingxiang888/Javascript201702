let http = require('http');
let fs = require('fs');

const MIME = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.jpg': 'image/jpg'
};

http.createServer(function (req, res) {
    if(req.url === '/' || req.url === '/index.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        var result = fs.readFileSync('./index3.html');
        res.end(result);
        return;
    }

    // 其他静态资源请求处理
    let flag = fs.existsSync('.' + req.url);
    if(flag) {
        var result = fs.readFileSync('.' + req.url);
        // 多个请求路径，一个一个判断太麻烦了，只有根路径做if判断，其他的用文件名判断就行，还有文件名不能写死，用正则去匹配
        var suffix = /(\.[a-zA-Z]+$)/.exec(req.url)[1];
        res.setHeader('Content-Type', MIME[suffix] + ';charset=utf8');
        res.end(result);
    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf8');
        res.statusCode = 404;//还得需要修改状态码
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