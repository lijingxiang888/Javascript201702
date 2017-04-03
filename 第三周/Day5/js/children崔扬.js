function children(curEle, tagName) {
    //=>先获取所有的元素子节点
    //思路：先获取当前容器下的所有子节点，然后循环进行筛选，筛选出nodeType===1的，这些就是元素子节点，把这些存放在一个数组容器中
    //=>如果传递了标签名,我们在进行二次过滤
    //思路：如果传递了tagName，我们循环上一步获取的元素子节点，找到标签名和传递进来的标签名相同的那一项，然后存储起来(也可以找到不同的，把不一样的干掉)
    var allNodes = curEle.childNodes,
        elementAry = [];
    for (var i = 0; i < allNodes.length; i++) {
        var curNode = allNodes[i];
        curNode.nodeType === 1 ? elementAry[elementAry.length] = curNode : null;
    }
    if (typeof tagName !== 'undefined') {
        for (var j = 0; j < elementAry.length; j++) {
            var curEle = elementAry[j],
                curEleTag = curEle.tagName.toUpperCase();
            if (curEleTag !== tagName.toUpperCase()) {
                elementAry.splice(j, 1);
                j--;
            }
        }
    }
    return elementAry;
}