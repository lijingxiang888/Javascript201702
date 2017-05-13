// 通常异步代码 都有回调函数 是没有返回值
setTimeout(function () {
    console.log('timer');
},0);

console.log('后面代码');

function fn(callBack) {
    setTimeout(function () {
        callBack('我是fe1111');
    },3000);
}
fn(function (result) {
    console.log(result);
});

function fe(result) {
    console.log(result);
}