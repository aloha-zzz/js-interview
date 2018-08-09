// 有一个全局变量 a，有一个全局函数 b，实现一个方法bindData，
// 执行后，a的任何赋值都会触发b的执行。
function defineProperty(obj, attr, value) {
    Object.defineProperty(obj, attr, {
        get: function () {
            console.log('get');
            return value;
        },
        set: function (newVal) {
            if (newVal === value) {
                return;
            }
            value = newVal;
            console.log('监听到数据发生了变化 ');
        }
    })
   
}
var data = {};
defineProperty(data, 'name', "Claire_Yecao");
console.log(data['name'])
data.name = 'asd'