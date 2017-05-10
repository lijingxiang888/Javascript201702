let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');

http.createServer(function (req, res) {
    // 解析出来 请求路径 和 query 查询参数
     let {pathname, query} = url.parse(req.url, true); // es6 对象结构赋值

      if(pathname === '/') { // 处理根目录
         res.setHeader('Content-Type', 'text/html;charset=utf-8');
         var result = fs.readFileSync('./time.html');
         res.end(result);
         return;
      }

      if(pathname === '/getTime') {
          res.setHeader('Access-Control-Allow-Origin', '*'); // 服务端解决跨域
          let time = new Date().toLocaleString();
          // {time:time} => {time}
          res.end(JSON.stringify({time})); // 不可以传输对象和数字
          return;
      }

      // 其他的静态资源 确保静态资源 是否存在
      let flag = fs.existsSync('.'+ pathname); // 检查文件否存在
      if(flag) {
          // ./time.js
          console.log(pathname);
          res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
          var result = fs.readFileSync('.' + pathname);
          res.end(result);
      } else { // 如果请求资源不存在 返回404
          res.statusCode = 404;
          res.end('404 NOT FOUND!');
      }



}).listen(5000, function () {
    console.log('监听5000端口');
});


// let{name, id} = {name:'liwenli', id: 20};
// console.log(name, id);
// console.log(new Date().toLocaleString());