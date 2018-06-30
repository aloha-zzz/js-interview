const url = require('url');
const querystring = require('querystring')

let parse = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
let parse2 = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true);
let format = url.format(parse2)
let url2 = url.resolve('http://www.example.com/foo/bar', '../baz');

console.log(parse)
console.log(parse2)

console.log(format)

console.log(url2)

let string = querystring.parse('foo=bar&baz=qux&baz=quux&corge');


console.log(string);