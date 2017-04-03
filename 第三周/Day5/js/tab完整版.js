/*
 * changeTab：我们封装一个简单版本的选项卡操作库，以后只要把对应的容器传递给这个方法，就可以让这个容器中实现选项卡切换的效果
 * @parameter
 *   box：我们需要实现选项卡效果的容器
 *   preIndex：默认选中页卡对应的索引,不传递的话,默认是0
 *
 * 使用此方法需要保证选项卡的主体结构一致
 * <div class='box'>
 *    <ul class='tab'>
 *        <li class='select'></li>
 *        <li></li>
 *        ...
 *    </ul>
 *    <div class='content select'></div>
 *    <div class='content'></div>
 *    ...
 * </div>
 */
function changeTab(box, preIndex) {
    var firstItem = utils.firstChild(box),
        itemList = utils.children(firstItem, 'LI'),
        contentList = utils.getByClass('content', box);

    //->在HTML结构中,我们不用加SELECT样式,统一在JS中根据初始值进行设置即可(不管HTML中用户是否设置了选中样式,都是按照传递进来的索引作为唯一标准)
    preIndex = preIndex || 0;
    for (var i = 0; i < itemList.length; i++) {
        var curLi = itemList[i],
            curDiv = contentList[i];
        if (i === preIndex) {
            utils.addClass(curLi, 'select');
            utils.addClass(curDiv, 'select');
        } else {
            utils.removeClass(curLi, 'select');
            utils.removeClass(curDiv, 'select');
        }
    }

    //->绑定点击事件,当点击LI的时候,实现选项卡切换
    for (var j = 0; j < itemList.length; j++) {
        itemList[j]['data-index'] = j;
        itemList[j].onclick = function () {
            //->移除上一次的
            utils.removeClass(itemList[preIndex], 'select');
            utils.removeClass(contentList[preIndex], 'select');

            //->选中本次点击的
            var dataIndex = this['data-index'];
            utils.addClass(itemList[dataIndex], 'select');
            utils.addClass(contentList[dataIndex], 'select');

            //->更新preIndex
            preIndex = dataIndex;
        }
    }
}


//->调取实现
// changeTab(document.getElementById('box1'));
// changeTab(document.getElementById('box2'), 2);

var boxList = utils.getByClass('box');
for (var i = 0; i < boxList.length; i++) {
    changeTab(boxList[i]);
}