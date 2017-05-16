// find filter map
var arr = [{id:1}, {id:2}, {id:3}, {id:4}];

// 查找id 为2的那一项
// var newVal = arr.find(function (item) {
//     console.log(1);
//     if(item.id === 3) {
//         return true;
//     }
//     // return  item.id === 2;
// });
// console.log(newVal);

// 将id大于2的过滤出去 组成一个新数组
// var newArr = arr.filter(function (item) {
//     if(item.id > 2) {
//         return true;
//     }
//    // return item.id > 2;
// });
// console.log(newArr);

// var newArr = arr.map(function (item) {
//     if(item.id === 2) {
//         return {id:20};
//     }
//    return item;
// });
// console.log(newArr);

var newArr = arr.filter(function (item) {
   return item.id !== 3;
});

console.log(newArr);