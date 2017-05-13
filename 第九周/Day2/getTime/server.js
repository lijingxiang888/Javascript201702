let http=require('http');
let fs=require('fs');
let url=require('url');
let mime=require('mime');//第三方模块，需要npm下载

http.createServer(function (req,res) {
    let {pathname,query}=url.parse(req.url,true); //es6结构赋值

    if(pathname==='/'){
        res.setHeader('Content-Type','text/html;charset-utf-8');
        var result=fs.readFileSync('./time.html');
        res.end(result);
    }
    if(pathname==='/getTime'){
        res.setHeader('Access-Control-Allow-Origin', '*'); // 服务端解决跨域
        let time=new Date().toLocaleString();
        res.end(JSON.stringify({time}));
        return;
    }
    // ./time.js
    let flag=fs.existsSync('.'+pathname);//检测文件是否存在
    if(flag){
        res.setHeader('Content-Type','mime.lookup(pathname)+charset-utf-8');
        var result=fs.readFileSync('.'+pathname);
        res.end(result);
        return;//??
    }else{
        res.statusCode=404;
        res.end('404 NOT FOUND');
    }


}).listen(5000,function () {
    console.log('监听5000');
});
