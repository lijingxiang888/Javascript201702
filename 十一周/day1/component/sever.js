let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer(function (req, res) {
    //query 是get请求后面的查询参数，true是会帮你以键值对的形式解析出来
    let {pathname, query} = url.parse(req.url, true);//将路径用url.parse解析出来
    if(pathname === '/getData') {
        //得到前端传递过来的回调函数名，前端不写函数名的话默认是callback
        let fnName = query.cb; // 得到前端传递过来的函数名 fn
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        let resData = fs.readFileSync('./data.json');

        //返回字符串形式，“函数名(返回的数据)”，这样返回给前端，前端就知道用哪个回调函数来处理传回的数据。
        //前端写了两个回调函数，一个正确，一个错误的，后台怎么知道用哪个？？？这个vue.resource文件已经封装好了，后台会自动识别用哪个。
        res.end(`${fnName}(${resData})`); // 函数名(resData) fn(resdata)
    }
}).listen(7000, function () {
    console.log('监听7000端口');
});

