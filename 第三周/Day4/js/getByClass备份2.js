function getByClass(strClass, context) {
    context = context || document;
    if ('getElementsByClassName' in document) {
        return context.getElementsByClassName(strClass);//->类数组
    }
    //->IE6~8
    var ary = [],
        allNode = context.getElementsByTagName('*');
    for (var i = 0, len = allNode.length; i < len; i++) {
        var cur = allNode[i],
            curName = cur.className;//->每一次循环,当前标签所有的样式类名,例如：'w2 w1 w3'
        //->监测当前循环的这个标签对应的样式类名中是否包含我们传递进来的这个样式类名,包含当前元素就是我们想要的,反之则不是
        var reg = new RegExp('(^| +)' + strClass + '( +|$)');
        if (reg.test(curName)) {
            ary.push(cur);
        }
    }
    return ary;
}