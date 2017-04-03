var oBox1 = document.getElementById('box1'),
    oTab = utils.firstChild(oBox1),
    oList = utils.children(oTab, 'li'),
    contentList = utils.getByClass('content', oBox1);
var previousIndex = 0;//->上一次选中项的索引：默认选中第一个,所以为零；随着操作要随时的更新；

for (var i = 0, len = oList.length; i < len; i++) {
    var curLi = oList[i];
    curLi['data-index'] = i;
    curLi.onclick = function () {
        //->移除上一次的
        utils.removeClass(oList[previousIndex], 'select');
        utils.removeClass(contentList[previousIndex], 'select');

        //->选中当前的
        var dataIndex = this['data-index'];
        utils.addClass(oList[dataIndex], 'select');
        utils.addClass(contentList[dataIndex], 'select');

        //->更新上一次选中的索引：当前点击的是下一次点击的上一次
        previousIndex = dataIndex;
    }
}
/*
 * 思想二：
 * 每一次点击结束都记住当前点击的是哪一个，下一次在点击的时候，把上一次记住的那个清除选中样式，再让当前点击的有选中的式(同样别忘记记录最新点击的是哪一个，方便下一次点击的时候清除)
 */
