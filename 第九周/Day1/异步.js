/**
 * Created by cuiyang on 2017/5/9.
 */


// setTimeout(function () {
//     console.log(123);
// }, 1000);
//
// console.log('nihao');
//
// var fe = function (){
//     console.log('fe');
// };

var fn = function (callback) {
    setTimeout(function () {
        callback();
    }, 1000);
};

fn(function (){
    console.log('zhufeng');
});
// 有回调函数的通常是异步的 第一个参数通常是err 没有返回结果