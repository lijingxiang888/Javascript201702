let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
let reqResult = {"error": 0, "msg": "用户添加成功"};
http.createServer(function (req, res) {
    let {pathname, query} = url.parse(req.url, true);
    if(pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
        return;
    }
    // 读取所有用户信息
    let users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

    // 获取所有用户信息
    if(pathname === '/getAllUsers') {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        let resJson = fs.readFileSync('./users.json');
        res.end(resJson);
        return;
    }

    // 增加用户信息
    if(pathname === '/addUserInfo') {
        // 接收post请求发送的数据
        let str = '';
        let userObj;
        req.on('data', function (data) {
            str += data;
        });

        req.on('end', function () {
           // console.log(str); // name=liwen&id=adfad  querystring.parse()
            userObj = JSON.parse(str); // 提交的用户信息
            // users = JSON.parse(users); // 目前所有的用户列表信息
            // 给增加用户 分配id
            let lastInd = users.data.length - 1;
            userObj.id = users.data[lastInd].id + 1;
            // 将增加的用户信息 添加用户列表中 并 存储写入到 users.json文件中
            users.data.push(userObj);
            reqResult.msg = '用户增加成功';
            fs.writeFileSync('./users.json', JSON.stringify(users));
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(reqResult));
        });
        return;
    }

    // 获取单个用户信息
    if(pathname === '/getUserInfo') {
        let uid = Number(query.uid);
        for(let i = 0; i < users.data.length; i++){
            let curData = users.data[i];
            if(curData.id === uid) {
                reqResult.data = curData;
                console.log(reqResult.data);
                break;
            }
        }
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        reqResult.msg = '用户信息获取成功';
        res.end(JSON.stringify(reqResult));
        return;
    }

    // 修改用户信息
    if(pathname === '/updateUserInfo') {
        let str = '';
        req.on('data', function (data) {
            str += data;
        });
        req.on('end', function () {
            console.log(str);
            let userObj = JSON.parse(str);

            let userData = users.data;
            for(let i = 0; i < userData.length; i++) {
                if(userData[i].id === Number(userObj.id)) {
                    console.log(userData[i]);
                    userData[i].name = userObj.name;
                    userData[i].tel = userObj.tel;
                    break;
                }
            }
            fs.writeFileSync('./users.json',JSON.stringify(users));
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            reqResult.msg = '用户信息修改成功';
            res.end(JSON.stringify(reqResult));
        });
        return;
    }

     // 删除用户信息
    if(pathname === '/removeUserInfo') {
        let rid = Number(query.rid);
        let userData = users.data; // 得到用户信息列表

        for(let i = 0; i < userData.length; i++){
             if(userData[i].id === rid) {
                 userData.splice(i,1); // 根据传递过来id 在数据对象中删除相应的用户信息
                 break;
             }
        }

        fs.writeFileSync('./users.json', JSON.stringify(users));
        reqResult.msg = '用户删除成功';
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.end(JSON.stringify(reqResult));
        return;
    }


    // 处理静态资源请求
    let flag = fs.existsSync('.' + pathname); // 先确定静态资源是否存在
    if(flag) {
        res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
        let resContext = fs.readFileSync('.' + pathname);
        res.end(resContext);
    } else {
        res.statusCode = 404;
        res.end(' 404 你访问的资源 飞走了~');
    }

}).listen(3000, function () {
    console.log('端口监听已开启');
});


