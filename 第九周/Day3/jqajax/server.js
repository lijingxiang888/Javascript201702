let http = require('http');
let url = require('url');
let mime = require('mime');
let fs = require('fs');

http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
    if(pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./jq1.html');
        res.end(resHtml);
        return;
    }

    // getData 获取数据接口
    if(pathname === '/getData') {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        let resData = fs.readFileSync('./data.json');
        res.end(resData);
        return;
    }


    // 其他资源请求
    console.log(pathname);
    let flag = fs.existsSync('.' + pathname);
    if(flag) {
        res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
        let resContext = fs.readFileSync('.' + pathname);
        res.end(resContext);
    } else {
        res.statusCode = 404;
        res.end('404 NOT FOUND~~');
    }

}).listen(8000, function () {
   console.log('监听8000端口');
});

