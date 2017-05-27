
var say = function (hi) {
     console.log(hi);
};

var sayHi = function () {
    console.log('hi nihao');
};
// export {say,sayHi} 导出多个
export {say} // es6导出

export default sayHi