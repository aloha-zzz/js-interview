// 坑出没注意： 标准化之后的路径里的斜杠在Windows系统下是\，
// 而在Linux系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，
// 需要用.replace(/\\/g, '/')再替换一下标准路径。 

const path = require('path')

var cache = {};

function store(key, value) {
    cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
store('foo//baz//../bar2', 2); 
console.log(cache);  // => { "foo/bar": 2 } // normalize 将传入路径转为标准路径
let join = path.join('foo', 'baz', 'bar'); // => "foo/bar"

console.log(join)
let ext = path.extname('foo/bar.js.jsx'); // => ".js"
console.log(ext)