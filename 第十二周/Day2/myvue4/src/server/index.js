let http = require('http');
let url = require('url');
let fs = require('fs');
let server = http.createServer(function (req, res) {
    let {pathname} = url.parse(req.url);
    console.log(pathname);
    if(pathname === '/') { // / = /api
        fs.createReadStream('./data.json').pipe(res);
    }
    if(pathname === '/hello') {
        res.end('hello world')
    }
});
server.listen(7000, function () {
   console.log('监听7000');
});
