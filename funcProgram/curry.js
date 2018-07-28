function curry(fn, ...args){
    let length = fn.length ; // 形参的长度
    
    return function(...innerArgs) {
        let _args = args.concat(innerArgs);
        if (_args.length < length) {
            return curry.call(this, fn, ..._args); // 这个地方要注意
        } else { 
            return fn.apply(this, _args);
        }
    }
}

function add (a, b, c) {
    return a + b + c;
}

let func = curry(add)
let add1 = func(1)
console.log(add1(2,3))