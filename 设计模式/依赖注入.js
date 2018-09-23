var service = function() {
    return { name: 'Service' };
}
var router = function() {
    return { name: 'Router' };
}
// 我们有另一个函数需要用到这两个模块。

var doSomething = function(other) {
    var s = service();
    var r = router();
};