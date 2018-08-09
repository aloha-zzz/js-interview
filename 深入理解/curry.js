var add = function(a, b) {
    console.log(a + b);
}

function curry(func, ...args) {
    let length = func.length; // 形参length

    return function(...innerArgs){
        let _args = args.concat(innerArgs);
        if (_args.length < length) {
            return curry.call(this, func, ..._args)
        } else {
            return func.apply(this, _args);
        }
    }
}