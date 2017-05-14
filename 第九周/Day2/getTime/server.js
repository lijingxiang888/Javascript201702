let http=require('http');
let fs=require('fs');
let url=require('url');
let mime=require('mime');//第三方模块，需要npm下载

http.createServer(function (req,res) {
    let {pathname,query}=url.parse(req.url,true); //es6结构赋值
//url.parse() 将请求的url转化为一个对象格式，参数2是true的话，将这个对象里的query属性对应的属性值转化为对象格式，而不是字符串形式了。


    if(pathname==='/'){
        res.setHeader('Content-Type','text/html;charset-utf-8');
        var result=fs.readFileSync('./time.html');
        res.end(result);
    }
    if(pathname==='/getTime'){
        res.setHeader('Access-Control-Allow-Origin', '*'); // 服务端解决跨域
        let time=new Date().toLocaleString();//得到本地时间
        res.end(JSON.stringify({time}));//转换为字符串形式
        return;
    }
    // ./time.js  处理其他静态文件
    let flag=fs.existsSync('.'+pathname);//检测文件是否存在
    if(flag){
        res.setHeader('Content-Type','mime.lookup(pathname)+charset-utf-8');
        var result=fs.readFileSync('.'+pathname);
        res.end(result);
        return;
    }else{
        res.statusCode=404;//改变状态码
        res.end('404 NOT FOUND');//返回的内容
    }


}).listen(5000,function () {
    console.log('监听5000');
});
