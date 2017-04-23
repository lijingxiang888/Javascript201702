(function () {
    //获取操作数据
    var outer = document.getElementById('outer');
    var wid = outer.clientWidth;
    var wrap = document.getElementById('wrap');
    var oImgs = wrap.getElementsByTagName('img');
    var focus = document.getElementById('focus');
    var oLis = focus.getElementsByTagName('li');
    var oLeft = document.getElementById('oLeft');
    var oRight = document.getElementById('oRight');
    outer.step = 0;// 记录当前索引
    outer.flag = true; // 标识动画是否结束 true 动画结束 false 动画没有结束

    //获取数据
    function getData(callBack) {
        var xhr = new XMLHttpRequest;
        xhr.open('get', 'data.txt', true);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
                var data = utils.toJSON(this.responseText);
                typeof callBack === 'function' ? callBack(data) : null;
            }
        };
        xhr.send(null)
    }

    getData(bindData);
    //绑定数据
    function bindData(data) {
        var imgSrc = '';
        var focusSrc = '';
        for (var i = 0; i < data.length; i++) {
            var cur = data[i];
            imgSrc += '<images data-real=' + cur.img + '>';
            focusSrc += i === 0 ? '<li class="selected"></li>' : '<li></li>';
        }
        wrap.innerHTML = imgSrc;
        focus.innerHTML = focusSrc;
        delayImg();
        bindEvent();
    }

    //图片延迟加载
    function delayImg() {
        for (var i = 0; i < oImgs.length; i++) {
            (function (n) {
                var oImg = oImgs[n];
                var imgSrc = oImg.getAttribute('data-real');
                var tempImg = new Image;
                tempImg.src = imgSrc;
                tempImg.onload = function () {
                    oImg.src = imgSrc;
                    if (n === 0) {
                        zfAnimate({
                            ele: oImgs[0],
                            target: {
                                opacity: 1
                            },
                            duration: 300
                        });
                    }
                     tempImg = null;
                }
            })(i)
        }
        //绑定完一页数据后，调用 自动轮播
        outer.timer = setInterval(autoMove, 3000);
    }

    //执行轮播动画

    function autoMove(ind) {
        if (!outer.flag) {//当前动画结束后才能进入下一个动画
            return
            }
        //当给n传值了，就执行焦点点击事件，否则就outer.step++ 自动轮播
        typeof ind != "undefined" ? outer.step = ind : outer.step++;// 记录当前索引
        //如果当前图片索引大于最后一张索引，就让索引为0的那张图片开始渐变
        if (outer.step > oImgs.length - 1) {
            outer.step = 0
        }
        // 1.渐变前
        // 让当前这张图片 zIndex 为 1，其他的所有兄弟图片zIndex 为 0
        var curImg = oImgs[outer.step];
        utils.css(curImg, 'zIndex', 1);
        var imgOther = utils.siblings(curImg);//当前图片的兄弟图片
        for (var i = 0; i < imgOther.length; i++) {
            utils.css(imgOther[i], 'zIndex', 0);
        }
        // 2.渐变时
        //当前图片opacity由0过渡到1 实现渐变效果
        zfAnimate({
            ele: curImg,
            target: {
                opacity: 1
            },
            duration: 300,
            callBack: function () {
                for (var i = 0; i < imgOther.length; i++) {
                    utils.css(imgOther[i], 'opacity', 0);
                }
                outer.flag = true; // 执行完一次动画后 为true 标识当前动画是否结束
            }
        });
        // 焦点同步 把当前图片的索引 传递到 焦点同步方法里 然后让焦点中索引为 outer.step 为选中样式
        changeFocus(outer.step);
    }

    // 焦点同步
    function changeFocus(n) {
        n > oImgs.length - 1 ? n = 0 : null;
        // 让索引为n的那个li有选中样式 其他的 移除选中样式
        for (var i = 0; i < oLis.length; i++) {
            var cur = oLis[i];
            i === n ? utils.addClass(cur, 'selected') : utils.removeClass(cur, 'selected');
        }
    }

    // 给焦点绑定点击事件
    function bindEvent() {
        for (var i = 0; i < oLis.length; i++) {
            oLis[i].ind = i;
            // 点击一次 平移到相应索引图片位置一次
            oLis[i].onclick = function () {
                autoMove(this.ind);
                outer.flag = false;
            }
        }
    }

    // 滑入 结束动画
    outer.onmouseover = function () {
        // 滑入显示左右切换
        oLeft.style.display = oRight.style.display = 'block';
        clearInterval(outer.timer);
    };
    // 滑出 执行新动画
    outer.onmouseout = function () {
        // 滑出隐藏左右切换
        oLeft.style.display = oRight.style.display = 'none';
        outer.timer = setInterval(autoMove, 3000);
    };
    //点击变化图片
    oLeft.onclick = function () {
        outer.step--;
        if (outer.step === -1) {
            outer.step = oImgs.length - 1;
        }
        autoMove(outer.step);
        outer.flag = false;
        //点击变化图片
    };
    oRight.onclick = function () {
        // 点击一次 平移一次 让autoMove执行一次
        autoMove();
        outer.flag = false;
    }
})();
