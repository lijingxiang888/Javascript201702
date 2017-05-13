let mime = require('mime');
let fs = require('fs');
let mimeType = mime.lookup('/');
console.log(mimeType);
console.log(arguments.callee + '');