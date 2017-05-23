let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
    if(pathname === '/getData') {
        let fnName = query.cb; // 得到前端传递过来的函数名 fn
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        let resData = fs.readFileSync('./data.json');
        res.end(`${fnName}(${resData})`); // 函数名(resData) fn(resdata)
    }
}).listen(7000, function () {
    console.log('监听7000端口');
});

