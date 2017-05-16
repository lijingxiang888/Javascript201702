let http = require('http');
let fs = require('fs');
let mime = require('mime');
/**
 * @param {Object} req 代表客户端请求对象
 * @param {Object} res 代表服务端响应对象
 */
http.createServer(function (req, res) {
	if(req.url === '/') {
		res.setHeader('Content-Type','text/html;charset=utf-8');
		let resHtml = fs.readFileSync('./index.html');
		res.end(resHtml);
		return;
	}
	
	if(req.url === '/favicon.ico') {
		res.setHeader('Content-Type', 'image/jpeg;charset=utf-8');
		let resImg = fs.readFileSync('./ndoejs.jpg');
		res.end(resImg);
		return;
	}
	
	 // 处理静态资源请求 /index.js => ./index.js
	 let flag = fs.existsSync('.' + req.url );
	 if(flag) {
	 	res.setHeader('Content-Type', mime.lookup(req.url ) + ';charset=utf-8');
	 let resContext = fs.readFileSync('.' + req.url);
	 res.end(resContext);
	 } else {
	 	res.statusCode = 404;
	 	res.end(' 404 页面飞到火星去了~');
	 }
	 
	 
	 
}).listen(7080, function () {
	console.log('监听7080端口');
});
