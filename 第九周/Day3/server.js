let http = require('http');
let fs = require('fs');
let url = require('url');


http.createServer(function (req, res) {
	let {pathname, query} = url.parse(req.url,true);
//	console.log(query); // 得到url后面的查询参数 get请求发送的数据
	if(pathname === '/') {
		res.setHeader('Content-Type', 'text/html;charset=utf-8');
		var resHtml = fs.readFileSync('./getAndpost.html');
		res.end(resHtml);
	}
	
	
	if(pathname === '/getData') {
		var str = '';
		// 获取post的请求发送的数据 请求体里的数据 
		req.on('data', function (data) { // 接收前端从请求体发送的数据 一点一点发送
			str += data;
		});
		
		req.on('end', function () { // 接收数据 完毕后 执行
			 var obj = JSON.parse(str);
			 console.log(obj.wd); // node
		});
		
		res.setHeader('Content-Type', 'application/json;charset=utf-8');
		var resData = fs.readFileSync('./data.json');
		res.end(resData);
	}
	
}).listen(9090, function  () {
	console.log('监听9090端口');
});

