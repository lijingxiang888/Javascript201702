function getByClass(strClass, context) {
    context = context || document;
    if ('getElementsByClassName' in document) {
        return context.getElementsByClassName(strClass);//->类数组
    }
    //->IE6~8
    //->处理多个：首先把传递进来的样式(多个)拆成一个个的,然后一个个的依次去和元素的样式类名比较,看是否包含；第一个去比较发现包含，则继续验证第二个...直到都更包含，说明当前的元素就是我想要的，只要有一个不包含就不是我想要的
    //'w2 w1'   ->元素：'w3 w1 w2'  ->元素:'w1 w3'
    var allNode = listToArray(context.getElementsByTagName('*')),
        classList = strClass.replace(/^ +| +$/g, '').split(/ +/g);
    for (var i = 0; i < classList.length; i++) {
        var curClass = classList[i];

        for (var j = 0; j < allNode.length; j++) {
            var curNode = allNode[j],
                curName = curNode.className,
                reg = new RegExp('\\b' + curClass + '\\b');
            if (!reg.test(curName)) {
                allNode.splice(j, 1);
                j--;
            }
        }
    }
    return allNode;
}