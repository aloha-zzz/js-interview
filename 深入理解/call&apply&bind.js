


function say(name, age) {
    console.log(`hi ${name}, age is ${age} ${this.val}`)
}

Function.prototype.call2 = function(context, ...args) {
    context = context || window;
    let fn = Symbol()
    context[fn] = this; // 防止被覆盖
    var result =  context[fn](...args)
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
    return function(...args) {
        let allArgs = bindArgs.concat(args);
        return _self.apply(context, allArgs)
    }
}
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