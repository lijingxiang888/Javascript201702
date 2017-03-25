/*
 *  utils[v1.0]：珠峰培训常用的方法类库,包含DOM和数组对象等操作
 *    - convertAry
 *    -
 */
var utils = (function () {
    /*
     * convertAry：Convert an array to an array
     * @parameter：
     *   likeAry[object]：Array class
     * @return：
     *   ary[array]：Convert completed array
     * By Team on 2017/03/25/ 12:51
     */
    function convertAry(likeAry) {
        //->Array.prototype.slice.call(likeAry) 如果类数组是一个DOM集合,在IE6~8低版本浏览器中不支持这种办法,执行会报错 =>对于不支持的我们自己写循环处理
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            //e.message -> 存储的是错误信息
            for (var i = 0, len = likeAry.length; i < len; i++) {
                ary[ary.length] = likeAry[i];
            }
        } finally {
            //->不管是否报错最后都会执行这里的代码
        }
        return ary;
    }

    /*
     * toJSON:把JSON格式的字符串转化为JSON格式的对象(解决了IE6~7下不兼容JSON的问题)
     * @parameter：
     *   str[string]：需要转换的JSON字符串
     * @return：
     *   obj[object]：转换完成的JSON对象
     * By Team on 2017/03/25/ 17:04
     */
    function toJSON(str) {
        return 'JSON' in window ? JSON.parse(str) : eval('(' + str + ')');
    }

    return {
        convertAry: convertAry,
        toJSON: toJSON
    }
})();
