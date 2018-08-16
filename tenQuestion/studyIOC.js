var logger = {
    write: function (content) {
        console.log(content)
    }
}
var loggerAlert = {
    write: function (content) {
        alert(content)
    }
}
// 不使用依赖注入
var myFunc = function () {
    var result = doSomething();
    logger.write(result);
}
myFunc();


// 
var myFuncFactory = function (logger) {
    return function () {
        var result = doSomething();
        logger.write(result);
    }
}
var myFunc = myFuncFactory(logger);
myFunc();
var myFuncAlert = myFuncFactory(loggerAlert);
myFuncAlert();
