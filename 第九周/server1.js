// http 搭建server的内置模块
let http = require('http');
let fs = require('fs');
/**
 * request 客户端
 * response 服务端
 */
// var server = http.createServer(function (req, res) {
//
// });
// server.listen();

http.createServer(function (req, res) {
    console.log(req.url); // 客户端请求路径
    if(req.url === '/favicon.ico') {
        var imgs = fs.readFileSync('./timg.jpg');
        res.end(imgs);
    }
    res.end('liwenli nihao');

}).listen('8090', function () { // 制定本地默认ip监听端口
    console.log('监听8090端口');
});

