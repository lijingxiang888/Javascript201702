(function () {

    // 获取操作元素
    var oUls = document.getElementById('oUls');
    // 获取到所有要加载的图片
    var oImgs = oUls.getElementsByTagName('img');
    // 获取浏览器窗口的高度
    var winH = utils.win('clientHeight');

    // 回到顶部按钮
    var back = document.getElementById('back');

    // 回到顶部
    var timer;
    back.addEventListener('touchstart' , function () {
        utils.win('scrollTop', 0);
    });
    // back.onclick = function () {
    //     utils.win('scrollTop', 0);
    //     // 每隔一段时间 获取到此时scrollTop 让它递减到0（到达顶部）为止
    //     //  timer = setInterval (function () {
    //     //      var sTop = utils.win('scrollTop');
    //     //      if(sTop <= 0) {
    //     //          clearInterval(timer);
    //     //          utils.win('scrollTop', 0);
    //     //          return;
    //     //      }
    //     //      sTop -= 100;
    //     //      utils.win('scrollTop', sTop);
    //     //  },10)
    // };
    // 获取初始数据
    var data;

    function getInitData() {
        // 发送ajax请求
        var xhr = new XMLHttpRequest;
        xhr.open('get', 'data.txt?_=' + Math.random(), false);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
                data = utils.toJson(this.responseText);
                // 如果有数据的时候 在进行绑定
                data && data.length ? bindData(data) : null;
            }
        };
        xhr.send(null);
    }

    getInitData();
    // 绑定数据
    function bindData(data) {
        console.log(data);
        var str = '';
        for (var i = 0; i < 20; i++) {
            // 0-7 随机整数作为 作为索引
            // Math.round(Math.random()*(7-0)+0);
            var ind = Math.round(Math.random()*7);
            var cur = data[ind];

            str += '<li><a href=' + cur.link + '>';
            // 左边div 用来包着img
            // 将当前img要加载的图片路径 先保存到 自身的data-real属性上 只有符合加载标准再让当前img 的src加载这个路径 否则显示默认背景图
            str += '<div><img data-real=' + cur.src + '></div>';
            // 右边div
            str += '<div>';
            str += '<h3>' + cur.title + '</h3>';
            str += '<p>' + cur.text + '</p>';
            str += '</div>';

            str += '</a></li>';
        }
        oUls.innerHTML += str; // 注意 “+=”在原有的基础上继续拼接累加输出
        delayImgs();
    }

    // 图片延迟加载
    function delayImgs() {
        for (var i = 0; i < oImgs.length; i++) {
            // 如果当前img flag为true 说明已经加载过了 就不再执行checkImg
            // 防止重复加载
            if(!oImgs[i].flag){
                checkImg(oImgs[i]);
            }
            // if(!oImgs[i].flag) checkImg(oImgs[i]);
        }
    }

    // 检测当前图片是否符合加载标准
    function checkImg(img) {
        // 滚动出去的距离
        var sTop = utils.win('scrollTop');
        // 获取图片 上边框外边 距离body 的上偏移量
        var imgTop = utils.offset(img).top;
        // 获取图片自身高度
        var imgH = img.offsetHeight * 0.5;
        // 如果浏览器窗口高度+滚动条滚出距离 >= 图片上偏移+自身高度 时 说明图片已经完全出现 窗口中  这时 我在再让图片加载
        if (winH + sTop >= imgTop + imgH) {
            // 获取到当前图片 自身保存在data-real上的图片路径
            var imgSrc = img.getAttribute('data-real');
            img.src = imgSrc;
            // // 检测图片资源有效性
            var tempImg = new Image; // 创建一个临时的img
            // tempImg如果加载成功就会触发 自身的onload事件
            tempImg.src = imgSrc;
            tempImg.onload = function () {
                console.log('加载成功');
                // 让页面中 img 加载 这个图片地址
                img.src = imgSrc;
                img.flag = true; // 将加载过的img加一个flag属性为true 说明加载过
            }
        }
    }
    window.onscroll = function () {
        delayImgs();
        // 当滚动条 快要滚动到页面底部时 继续发送数据请求 进行加载
        var sTop = utils.win('scrollTop');
        // clientHeight(窗口高度) + scrollTop（滚动条最大值） == scrollHeight
        var wScrollH = utils.win('scrollHeight');
       if(winH + sTop >= wScrollH - 500) {
           getInitData(); // 再次发送ajax请求
           console.log(123);
       }
       // 控制回到顶部按钮 显示和隐藏
       if(sTop >= winH*0.5) {
           utils.setCss(back, 'display', 'block');
       } else {
           utils.setCss(back, 'display', 'none');
       }
    }
})();
