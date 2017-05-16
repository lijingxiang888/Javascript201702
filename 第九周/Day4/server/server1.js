let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url'); // 解析url
let qs = require('querystring');
/**
 * @param {Object} req 代表客户端请求对象
 * @param {Object} res 代表服务端响应对象
 */
http.createServer(function (req, res) {
	// es6 解构赋值
	let {pathname, query} = url.parse(req.url, true);
//	let urlObj = url.parse(req.url, true);
//	let pathname = urlObj.pathname;
//	let query = urlObj.query;

	if(pathname === '/') {
		res.setHeader('Content-Type','text/html;charset=utf-8');
		let resHtml = fs.readFileSync('./getData.html');
		res.end(resHtml);
		return;
	}
	
	if(pathname === '/favicon.ico') {
		res.setHeader('Content-Type', 'image/jpeg;charset=utf-8');
		let resImg = fs.readFileSync('./ndoejs.jpg');
		res.end(resImg);
		return;
	}
	
	
	if(pathname === '/getData') {
		// get请求处理
//	console.log(pathname);
//	console.log(query); // 接受到get请求数据
    if(req.method === 'GET') {
    	console.log('这是get请求');
    	console.log(query);
    } else if(req.method === 'POST') {
    	console.log('这是post请求');
    	  let str = '';  
        req.on('data', function (data) { // 一点一点传输 每一次都会触发
        	str += data;
        });
        
        req.on('end', function () {
        	console.log(str);
        	let objData = qs.parse(str);
        	console.log(objData);
        });
    }
//		res.setHeader('Content-Type', 'application/json;charset=utf-8');
//		let resJson = fs.readFileSync('./data.json');
//		res.end(resJson);
//		return;

    //接收post 请求数据 
		res.setHeader('Content-Type', 'application/json;charset=utf-8');

		let resJson = fs.readFileSync('./data.json');
		res.end(resJson);
		return;
	}
	
	
	 // 处理静态资源请求 /index.js => ./index.js
	 let flag = fs.existsSync('.' + pathname );
	 if(flag) {
	 	res.setHeader('Content-Type', mime.lookup(pathname ) + ';charset=utf-8');
	 let resContext = fs.readFileSync('.' + pathname);
	 res.end(resContext);
	 } else {
	 	res.statusCode = 404;
	 	res.end(' 404 页面飞到火星去了~');
	 }
	 
	 
	 
}).listen(8090, function () {
	console.log('监听8090端口');
});
