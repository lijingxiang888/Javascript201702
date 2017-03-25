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
    controlLink[j]['data-index'] = j;
    controlLink[j].onclick = function () {
        sortTable(this['data-index']);
    }
}

function sortTable(index) {
    /*index:0->time 1->price 2->hot*/
    var productList = utils.convertAry(productItem.getElementsByTagName('li'));//->获取当前所有的LI,然后把其转换为数组,这样就可以使用SORT进行排序了
    productList.sort(function (a, b) {
        //"2017-03-15" "2017-03-14" =>日期比较的话,我就是去掉-,然后比较数字
        var aNum = null,
            bNum = null;
        switch (index) {
            case 0:
                aNum = a.getAttribute('data-time').replace(/-/g, '');
                bNum = b.getAttribute('data-time').replace(/-/g, '');
                break;
            case 1:
                aNum = a.getAttribute('data-price');
                bNum = b.getAttribute('data-price');
                break;
            case 2:
                aNum = a.getAttribute('data-hot');
                bNum = b.getAttribute('data-hot');
                break;
        }


    });

}



