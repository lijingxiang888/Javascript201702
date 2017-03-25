/*
 * 1、绑定数据：把JSON中的数据获取到,然后展示在页面中
 *  ->发送AJAX请求
 *    1)创建AJAX对象
 *    2)打开一个请求的URL地址(我们暂时使用同步:数据没有获取完成,其余的事情都做不了)
 *    3)监听AJAX状态改变
 *    4)发送请求
 *
 *  ->解析数据然后动态创建DOM元素,把内容增加到页面中
 */

//1、获取数据
var productData = null;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'json/product.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        //->xhr.readyState:AJAX状态(4是成功)
        //->xhr.status:HTTP网络状态码(200是成功)
        productData = utils.toJSON(xhr.responseText);//->从服务器上获取到数据了,一般我们获取到的结果都是JSON格式的字符串
    }
};
xhr.send(null);

//2、数据绑定
//->字符串拼接
//->动态创建DOM元素(文档碎片)
//->模板引擎(EJS、kTemplate...)
//->ES6中提供的模板字符串
//==>DOM的回流：当页面中的DOM结构发生改变(增删改查或者挪位置)都会让浏览器重新的计算DOM结构,这样性能消耗很大,所以项目中应该尽量减少DOM的回流
var frg = document.createDocumentFragment();//->创建一个文档碎片(创建一个临时的容器)
for (var i = 0, len = productData.length; i < len; i++) {
    var cur = productData[i];
    var oLi = document.createElement('li');
    /*当前元素里面的详细内容没必要使用动态创建的方式了,直接的字符串拼接会更省事*/
    var str = '';
    str += '<a href="#">';
    str += '<img src="' + cur.img + '" alt=""/>';
    str += '<span class="title">' + cur.title + '</span>';
    str += '<span class="price">￥' + cur.price + '</span>';
    str += '</a>';
    oLi.innerHTML = str;
    /*自定义属性编程思想是整个JS编程思想中最伟大之一：凡是后期需要使用当前元素的一些信息值的时候，我们都可以先把这些值放在自定义属性上进行存储，以后如果有需要直接从当前元素的自定义属性上获取即可 "data-xxx=xxx"*/
    oLi.setAttribute('data-price', cur.price);
    oLi.setAttribute('data-hot', cur.hot);
    oLi.setAttribute('data-time', cur.time);
    frg.appendChild(oLi);//->每一次循环结束都把创建的LI存放在文档碎片中,不要直接的追加到页面上,减少DOM的回流
}
var productBox = document.getElementById('product'),
    productItem = productBox.getElementsByTagName('ul')[0];//->需要通过索引获取唯一的一个,这才是我们想要的那个UL
productItem.appendChild(frg);
frg = null;

//3、排序
//->先获取所有的A,然后分别绑定点击事件
var controlBox = document.getElementById('control'),
    controlLink = controlBox.getElementsByTagName('a');
for (var j = 0, len2 = controlLink.length; j < len2; j++) {
    var curA = controlLink[j];
    curA['data-attr'] = j === 0 ? 'data-time' : (j === 1 ? 'data-price' : 'data-hot');//->通过索引计算排序的字段(所谓的字段就是当前LI存储的自定义属性而已)
    curA['data-flag'] = -1;//->排序标识:-1降序 1升序
    curA.onclick = function () {
        //this->点击的这个A
        //sortTable();//->sortTable中的THIS是window,因为方法前面没有点
        sortTable.call(/*点击的这个A*/this);
    }
}

function sortTable() {
    //->如果我们执行这个方法,让方法中的THIS变为点击的这个A,那么所需要的内容完全可以通过当前点击A(THIS)的自定义属性来获取,这样不需要在一个个参数传递了
    //->THIS:当前点击的A
    var _this = this;
    _this['data-flag'] *= -1;

    var productList = utils.convertAry(productItem.getElementsByTagName('li'));//->获取当前所有的LI,然后把其转换为数组,这样就可以使用SORT进行排序了
    productList.sort(function (a, b) {
        //this->window
        //"2017-03-15" "2017-03-14" =>日期比较的话,我就是去掉-,然后比较数字
        var aNum = a.getAttribute(_this['data-attr']).replace(/-/g, ''),
            bNum = b.getAttribute(_this['data-attr']).replace(/-/g, '');
        return (aNum - bNum) * _this['data-flag'];
    });

    //->把排好的结果重新的绑定在页面中(DOM映射)
    var frg = document.createDocumentFragment();
    for (var i = 0, len = productList.length; i < len; i++) {
        frg.appendChild(productList[i]);
    }
    productItem.appendChild(frg);
    frg = null;

    //->点击当前A的时候：让其他的A FLAG变为-1(初始值),这样下一次在点击的才是从升序开始(还需要控制箭头)
    var iList = _this.getElementsByTagName('i'),
        iUp = iList[0],
        iDown = iList[1];
    if (_this['data-flag'] === -1) {
        iDown.className = 'down bg';
        iUp.className = 'up';
    } else {
        iDown.className = 'down';
        iUp.className = 'up bg';
    }

    for (var j = 0; j < controlLink.length; j++) {
        var otherA = controlLink[j];
        if (otherA !== _this) {
            otherA['data-flag'] = -1;
            var otherI = otherA.getElementsByTagName('i');
            otherI[0].className = 'up';
            otherI[1].className = 'down';
        }
    }
}