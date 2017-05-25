var obj = require('./public/a.js'); // 导入依赖模块
import {say} from './public/b.js'; // es6导入
import {say as Nao} from './public/b.js'; // es6导入 给say起个别名 Nao
import Hello from './public/b.js';
// console.log(Hello);
console.log(Nao);
// console.log(say);
say('hello es6');
// console.log(obj);
console.log('hello webpack!');
obj.add(10, 20);
