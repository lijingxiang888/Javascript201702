// 对象合并

let default1 = {name: 'liwenli', id: 1};
let options1 = {name: 'cuiyang', id: 12, say: 'hello'};

// Object.assign(default1, options1);
// console.log(default1);

for(let attr in options1) {
    if(options1.hasOwnProperty(attr)) {
        default1[attr] = options1[attr];
    }
}
console.log(default1);