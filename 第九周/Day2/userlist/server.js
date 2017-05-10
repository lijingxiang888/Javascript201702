let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
     res.setHeader('Access-Control-Allow-Origin', '*');
    if(pathname === '/') { // 访问根路径
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let result = fs.readFileSync('./user.html');
        res.end(result);
    } else if(pathname === '/getUsers') {//获取用户列表信息
        res.setHeader('Content-Type','application/json;charset=utf-8');
        let result = fs.readFileSync('./data.json');
        res.end(result);
    } else { // 未找到处理
        res.statusCode = 404;
        res.end('404 NOT FOUND');
    }
}).listen(8060);
