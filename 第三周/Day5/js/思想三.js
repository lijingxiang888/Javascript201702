/*
 * 思想三：
 *   让当前点击的有选中样式，让其兄弟们移除选中样式；DIV的操作也可以这样处理；
 */
var oBox1 = document.getElementById('box1'),
    oTab = utils.firstChild(oBox1),
    oList = utils.children(oTab, 'li'),
    contentList = utils.getByClass('content', oBox1);

for (var i = 0, len = oList.length; i < len; i++) {
    var curLi = oList[i];
    curLi['data-index'] = i;
    curLi.onclick = function () {
        //->LI
        utils.addClass(this, 'select');
        var siblingsLi = utils.siblings(this);
        for (var k = 0; k < siblingsLi.length; k++) {
            utils.removeClass(siblingsLi[k], 'select');
        }

        //->DIV
        var curDiv = contentList[this['data-index']];
        utils.addClass(curDiv, 'select');
        var siblingsDiv = utils.siblings(curDiv);
        for (var z = 0; z < siblingsDiv.length; z++) {
            utils.removeClass(siblingsDiv[z], 'select');
        }
    }
}
