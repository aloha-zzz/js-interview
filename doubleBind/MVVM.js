/**
 *  双向绑定的原理 分三部分 Observer Compile Watcher
 *  Observer 用 Object.defineProperty 来获取setting 修改数据时的消息
 *  Dep 发布/订阅模式，收集subscribe，属性变化触发Dep对应的变化函数
 * 
 * 
 *  Watcher 订阅者.处理Observer的update消息。然后执行对应的更新函数
 * 
 *  Compile 遍历node   执行node2fragment 对fragment进行compile 然后添加到对应的
 *  Watcher。  Compile 分别用来初始化 View 和 更新View
 *  
 */ 


function observe(value, cb) {
    Object.keys(value).forEach((key) => defineReactive(value, key, value[key] , cb))
}

function defineReactive (obj, key, val) {
    var dep = new Dep();
    observe(val)
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: ()=>{
            /*....依赖收集等....*/
            /*Github:https://github.com/answershuto*/
            return val
        },
        set:newVal=> {
            if (val === newVal) return;
            val = newVal;
            console.log('监听到change')
            // cb();/*订阅者收到消息的回调*/
            dep.notify()
        }
    })
}

function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

class Vue {
    constructor(options) {
        this._data = options.data;
        observe(this._data, options.render)
    }
}

let app = new Vue({
    el: '#app',
    data: {
        text: 'text',
        text2: 'text2'
    },
    render(){
        console.log("render");
    }
})