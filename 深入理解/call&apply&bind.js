


function say(name, age) {
    console.log(`hi ${name}, age is ${age} ${this.val}`)
}

Function.prototype.call2 = function (context, ...args) {
    context = context || window;
    let fn = Symbol()
    context[fn] = this; // 防止被覆盖
    var result = context[fn](...args) // 意思是在context的内部添加方法来执行
    Reflect.deleteProperty(context, fn)
    return result;
}

Function.prototype.myCall = function (context, ...args) {
    context = context || window;
    context.$fn = this;
    context.$fn(...args);
    delete context.fn
}

Function.prototype.myApply = function (context, arr) {
    context = context || window;
    context.$fn = this;
    context.$fn(...arr);
    delete context
}

Function.prototype.myBind = function (context, ...bindArgs) {
    context = context || window;
    let _self = this;

    return function F(...args) {
        if (this instanceof F) { // 判断是不是构造函数
            return new F(...args, ...bindArgs) // 
        }
        return _self.apply(context, args.concat(bindArgs))
    }
}
/**
 * 当bind 返回的函数作为构造函数是， bind指定的this 失效，但是传入的值有效
 */



let obj = {
    val: 'obj'
}

say('zhou', 1);
// say.call(obj)
// say.call(obj, 'vickey', 2)
// say.apply(obj, ['missy', 3])
// const bindFunc = say.bind(obj, 'zhou', 4)
// bindFunc()
say.myCall(obj);
say.myCall(obj, 'vickey', 2)
say.myApply(obj, ['missy', 3])
const bindFunc = say.myBind(obj, 'zhou', 4)
bindFunc()