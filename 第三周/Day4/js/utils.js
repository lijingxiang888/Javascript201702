var utils = (function () {
    function listToArray(likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary.push(likeAry[i]);
            }
        }
        return ary;
    }

    /*
     * offset:模拟JQ中的OFFSET方法,获取当前元素距离BODY的偏移
     * @parameter
     *    curEle：current element 当前元素
     * @return
     *    {top:xxx,left:xxx} ->距离BODY的上偏移和左偏移
     */
    function offset(curEle) {
        var l = curEle.offsetLeft,
            t = curEle.offsetTop,
            p = curEle.offsetParent;
        while (p) {
            //->IE8下不需要额外的去加边框,只有非IE8浏览器才需要加边框
            if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {top: t, left: l}
    }

    /*
     * getCss：获取当前元素所有经过浏览器计算的样式(兼容全部的浏览器)
     * @parameter
     *   curEle：当前要操作的元素
     *   attr：当前要获取的样式属性名(字符串:'padding')
     * @return 
     *   获取的样式属性值
     */
    function getCss(curEle, attr) {
        var result = null,
            reg = null;
        if ('getComputedStyle' in window) {
            result = window.getComputedStyle(curEle, null)[attr];
        } else {
            //->如果我们的ATTR传递的是OPACITY说明我们想获取元素的透明度,但是在IE低版本浏览器中,通过OPACITY获取不到,我们需要通过FILTER获取,然而我们通过滤镜获取的结果和OPACITY获取的结果还是不一样的:alpha(opacity=30) / 0.3
            if (attr === 'opacity') {
                result = curEle.currentStyle['filter'];
                reg = /^alpha\(opacity=(.+)\)$/;
                result = reg.test(result) ? reg.exec(result)[1] / 100 : 1;
            } else {
                result = curEle.currentStyle[attr];
            }
        }

        //->把获取的结果去掉单位:方便后续的数学运算(JQ是没有去单位的)
        //1、我们只有“数字+单位”这种情况在进行处理,对于没有单位的或者是复合样式值,再或者是英文单词这种值,都不需要进行处理
        reg = /^-?(\d|([1-9]\d+))(\.\d+)?(px|em|rem|pt)$/;
        reg.test(result) ? result = parseFloat(result) : null;
        return result;
    }

    /*
     * setCss：设置元素某一个样式属性的值(原理:设置当前元素的行内样式)
     * @parameter
     *   curEle：当前要操作的元素
     *   attr：当前要设置的样式属性名
     *   value：当前要设置的属性值(部分样式属性可以自动补充单位)
     */
    function setCss(curEle, attr, value) {
        //->当传递的实参不符合规范的时候,我们进行容错处理或者给予相关的默认值
        if (arguments.length < 3) {
            //->throw new Error('')：异常抛出 ReferenceError(引用错误)/TypeError(类型错误)/SyntaxError(语法错误)/RangeError(超出范围)...
            return;
        }

        //->对于FLOAT的处理
        if (attr === 'float') {
            curEle['style']['cssFloat'] = value;
            curEle['style']['styleFloat'] = value;
            return;
        }

        //->对于OPACITY的处理
        if (attr === 'opacity') {
            curEle['style']['opacity'] = value;
            curEle['style']['filter'] = 'alpha(opacity=' + value * 100 + ')';
            return;
        }

        //->对于某些样式属性,如果你传递的参数值没有加单位,我们可以自动给补充单位(PX),但是不是所有的都需要补充,例如：border、float、zIndex、opacity...margin不补,但是可以给marginLeft补充单位
        var reg = /^(width|height|((margin|padding)?(left|right|bottom|top))|fontSize)$/i;
        if (reg.test(attr)) {
            //->传递这些属性也不一定要加单位,主要还需要看用户是否传递单位了,用户没传我再加单位：使用isNaN检测是否为有效数字,是有效数字说明没加,我们去加
            if (!isNaN(value)) {
                value = value + 'px';
            }
        }
        curEle['style'][attr] = value;
    }

    /*
     * setGroupCss：批量设置元素的CSS样式
     * @parameter
     *   curEle：当前要操作的元素
     *   options：当前要设置的样式属性集合(对象) {top:xxx,left:xxx...}
     * 原理：获取传递的属性集合,然后进行遍历循环,调取SET CSS方法依次设置即可
     */
    function setGroupCss(curEle, options) {
        if (typeof options !== 'object') return;
        for (var attr in options) {
            if (options.hasOwnProperty(attr)) {
                setCss(curEle, attr, options[attr]);
            }
        }
    }

    /*
     * css：把getCss/setCss/setGroupCss进行汇总,可以实现设置、获取和批量设置的功能 =>JQ中的CSS方法也是这样处理的
     */
    function css() {
        var len = arguments.length,
            curEle = arguments[0],
            attr = null,
            value = null,
            options = null;
        if (len === 3) {
            attr = arguments[1];
            value = arguments[2];
            setCss(curEle, attr, value);
            return;
        }

        if (len === 2 && typeof arguments[1] === 'object') {
            options = arguments[1];
            setGroupCss(curEle, options);
            return;
        }

        attr = arguments[1];
        return getCss(curEle, attr);
    }

    /*
     * getByClass：处理getElementsByClassName的兼容性的,通过样式类名来获取一组元素(元素集合=>HTMLCollection)
     * 1、我们只要把样式类名一传，会在当前区域中进行查找，把拥有这个样式类名的元素都获取到(元素可能拥有多个样式类,只要其中包含我么的这个,就属于我们想要的)
     * 2、getElementsByClassName('w2 w1')这句话的意思是需要同时拥有w1和w2样式类名的元素才符合我们的要求,传递参数的顺序以及元素本身样式类名的顺序不受到影响
     * 3、如果没有找到符合的,返回的是空数组
     *
     * @parameter
     *    strClass：[string]需要操作的样式类名,例如：'w1'、'w2 w1'...
     *    context：[HTML Object]获取的上下文,获取元素的一个范围,不写默认是document在整个文档进行获取
     */
    function getByClass(strClass, context) {
        context = context || document;
        if ('getElementsByClassName' in document) {
            return context.getElementsByClassName(strClass);//->类数组
        }
        //->IE6~8
        var allNode = context.getElementsByTagName('*'),
            classList = strClass.replace(/^ +| +$/g, '').split(/ +/g),
            ary = [];
        for (var i = 0; i < allNode.length; i++) {
            var curNode = allNode[i],
                curName = curNode.className,
                flag = true;//->假设当前标签是匹配的
            for (var j = 0; j < classList.length; j++) {
                var reg = new RegExp('\\b' + classList[j] + '\\b');
                if (!reg.test(curName)) {
                    flag = false;
                    break;
                }
            }
            flag ? ary.push(curNode) : null;
        }
        return ary;
    }

    return {
        offset: offset,
        css: css,
        getByClass: getByClass
    }
})();