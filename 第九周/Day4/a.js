console.log('hello  AAA');
let add = (a, b) => console.log(a+b);
console.log(this === module.exports);
// 模块导出
// module.exports.add = add;
// 批量导出
// module.exports = {
//     sya: 'nihao',
//     name: 'zhufeng',
//     add: add
// };

// 另一种导出方式
// exports != module.exports= {};
// exports.sayHi = () => console.log('exports 导出的方法');

// exports = { 改变了空间指向 不能进行批量设置
//   id: 20,
//   name : 'zhufeng'
// };

// 每个js模块其实导出都是自己的module.exports这个模块对象
// module.exports.add = add;
// exports = module.exports= {};