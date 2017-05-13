let qs = require('querystring');

let str = 'name=liwenli&id=1';
// console.log(qs.parse(str, '&'));
console.log(qs.parse(str)); // { name: 'liwenli', id: '1' }
console.log(qs.stringify({name: 'liwenli', id: '1'})); // name=liwenli&id=1