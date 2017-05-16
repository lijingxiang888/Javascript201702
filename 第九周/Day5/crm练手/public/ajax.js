(function () {
    //创建ajax对象
    function getXhr() {
        let xhr = null;
        let ary = [function () {
            return new XMLHttpRequest();
        }, function () {
            return new ActiveXObject('Microsoft.XMLHTTP')
        }, function () {
            return new ActiveXObject('Msxml2.XMLHTTP')
        }, function () {
            return new ActiveXObject('Msxml3.XMLHTTP')
        }];
        //找出来覆盖
        for (let i = 0; i < ary.length; i++) {
            let curFn = ary[i];
            try {
                xhr = curFn();//让每个兼容函数执行，得出xhr
                getXhr = curFn;//谁能得出xhr对象，就赋值给getXhr
                break
            } catch (e) {
            }
        }
        if (!xhr) {
            throw Error('请升级浏览器');

        }
        return xhr;
    }

    function ajax(options) {
        let df = {
            url: null,
            type: 'GET',
            async: 'true',
            cache: 'true',
            dataType: 'text',
            data: null,
            timeout: null,
            succese: null,
            error: null
        };
        //默认参数进行合并
        for (let attr in options) {
            if (options.hasOwnProperty(attr)) {
                df[attr] = options[attr];
            }
        }
        // get 缓存问题
        if (df.type.toUpperCase() === 'GET') {// 判断是get请求
            // 需不需要缓存  如果需要缓存 并且 需不需要 拼接'?'
            if (!df.cache && df.url.indexOf('?') > -1) {
                df.url += '_=' + new Date().getTime();
            } else if (!df.cache) {
                df.url += '?_=' + new Date().getTime();
            }
            // get请求中 数据传输时需要将数据以 url?name=liwenli&id=1这种形式传播，但我们传参数的时候 {id: 24, name: "lwl"}是这种形式，所以需要拼接
            let data = df.data;
            if (df.data) {
                for (let attr in data) {
                    if (df.url.indexOf('?') > -1) {
                        df.url += '&' + attr + '=' + data[attr];
                    } else {
                        df.url += '?' + attr + '=' + data[attr];
                    }
                }
            }
        }
        //创建ajax 对象
        let xhr = getXhr();//执行一次就创建了一个ajax对象
        // 设置响应内容解析类型
        xhr.responseType = df.dataType;
        //打开一个端口的设置
        xhr.open(df.type, df.url, df.async);
        //超时设置
        xhr.timeout = df.timeout;
        xhr.ontimeout = df.error;
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
                if (typeof df.succese === 'function') {
                    df.succese.call(df, this.response)
                }
            }
        };
        xhr.send(JSON.stringify(df.data));// post 请求需要通过 请求体向后台传输数据
    }
    window.$={ajax};//用的时候直接$.ajax{传入参数即可}

})();
