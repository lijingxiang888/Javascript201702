function getByClass(strClass, context) {
    //if (typeof context === 'undefined') context = document;
    context = context || document;//->设置默认值
    if ('getElementsByClassName' in document) {
        //->标准浏览器:直接使用内置的实现
        return context.getElementsByClassName(strClass);
    }
    //->IE6~8:自己写代码实现
    var ary = [],
        allNode = context.getElementsByTagName('*');
    for (var i = 0, len = allNode.length; i < len; i++) {
        var curNode = allNode[i],
            curName = curNode.className;//->'w11 w3 w2'
        //curName.indexOf(strClass)>-1:这样检测不行,indexOf是只要包含这些字符即可,例如：当前元素的样式类名是'w11'，我们传递进来的是'w1'，按照原理应该属于不匹配的，但是使用indexOf检测的结果说明是属于符合的
        var reg = new RegExp('(^|\\s+)' + strClass + '(\\s+|$)');
        if (reg.test(curName)) {
            ary.push(curNode);
        }
    }
    return ary;
}