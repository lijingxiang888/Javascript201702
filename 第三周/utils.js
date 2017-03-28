var utils = (function () {
    /**
     * [likeArray 类数组转化为数组]
     * @param  {[object]} list [要转化的类数组]
     * @return [Array]        [转化后的新数组]
     */
    function likeArray(list) {
        try { // 方案一
            return [].slice.call(list, 0); // 不兼容（ie8- 元素集合和节点集合） 利用call方法改变slice中的this
        } catch (e) { // 方案二 兼容写法
            var arr = [];
            for (var i = 0; i < list.length; i++) { // 将类数组中的每一项 取出来依次放到 arr这个数组里面
                arr.push(list[i]);
            }
            return arr;
        }
    }

    /**
     * [toJson 将JSON字符串转换为JSON对象]
     * @return [object] [JSON对象]
     */
    function toJson(jsonStr) {
        return "JSON" in window ? JSON.parse(jsonStr) : eval('(' + jsonStr + ')');
    }

    /**
     *   获取document文档的一些盒模型样式属性值 获取或设置
     * @param attr 设置属性 （只有一个参数是获取）
     * @param val  设置的属性值
     * @returns {val}
     */
    function win(attr, val) {
        if (typeof val === 'undefined') { // 如果第二个参数没传就是获取值
            return document.documentElement[attr] || document.body[attr];
        }
        // 否则就是 设置值
        document.documentElement[attr] = val;
        document.body[attr] = val;
    }

    /**
     * offset 获取当前元素距离body左偏移和上偏移的距离
     * @param ele
     * @returns {left: l,top:t}
     */
    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var par = ele.offsetParent;
        while (par && par.nodeName.toUpperCase() != 'BODY'){
            l += par.clientLeft + par.offsetLeft;
            t += par.clientTop + par.offsetTop;
            par = par.offsetParent;
        }
        return {left: l, top: t};
    }

    return { // 将写好的方法 放到这个对象里 并且返回到外面
        likeArray: likeArray,
        toJson: toJson,
        win: win,
        offset: offset
    }

})();
