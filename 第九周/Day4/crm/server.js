let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');
let qs = require('querystring');

http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
    if (pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
        return;
    }

    if (pathname === '/getUserData') { // 获取用户数据接口
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        let resJson = fs.readFileSync('./users.json');
        res.end(resJson);
        return;
    }

    if (pathname === '/addUserData') { // 添加用户数据接口
        let str = '';
        req.on('data', function (data) {
            str += data;
        });

        req.on('end', function () {
            let userObj = qs.parse(str);
            let userList = fs.readFileSync('./users.json', 'utf8');
            userList = JSON.parse(userList);
            let lastInd = userList.data.length - 1;
            userObj.id = userList.data[lastInd].id + 1;
            userList.data.push(userObj);
            fs.writeFileSync('./users.json', JSON.stringify(userList));
            let reObj = {
                "error": 0,
                "msg": ""
            };
            reObj.msg = "用户添加成功~";
            res.end(JSON.stringify(reObj));
        });
        return;
    }

    // 处理静态资源文件请求
    let flag = fs.existsSync('.' + pathname);
    if (flag) {
        res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
        let resContext = fs.readFileSync('.' + pathname);
        res.end(resContext);
    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.statusCode = 404;
        res.end('你的页面 飞走啦~');
    }
}).listen(9080, function () {
    console.log('监听9080端口');
});
