let url = require('url');

let urlStr = 'http://127.0.0.1:8090/getData?name=zhufeng&id=10';

let urlObj = url.parse(urlStr, true);
console.log(urlObj);
