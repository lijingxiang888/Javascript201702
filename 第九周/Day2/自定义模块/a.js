let sum = (a, b) => a + b;
console.log(123);
// module.exports.sum = sum; // 导出模块
// console.log(module.exports);

// module.exports = {
//     sum, // sum:sum
//     say: 'nihao'
// };

// 第二种导出
// exports.name= 'liwenli';

exports = { // 改变了默认 指向（module.exports）所以不能进行 批量导出设置
    id: 10,
    name: 'zhufeng'
};

// 默认导出的都是  module.exports 指向的空间地址
// exports != module.exports = {
//
// };