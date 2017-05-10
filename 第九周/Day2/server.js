// http 搭建server内置模块
let http = require('http');

/**
 * req 代表客户端
 * res 代表服务端
 */

// let server = http.createServer(function (req, res) {
//
// });
// server.listen(9090);

http.createServer(function (req, res) {
    res.end('hello server'); // 结束响应 并可以返回一些信息回送到客户端
}).listen(8080,function () {
    console.log('监听8080端口');
});


