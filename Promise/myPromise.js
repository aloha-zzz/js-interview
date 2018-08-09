function _Promise(execute) {
    this.status = 'pending';
    this.data = void 0;
    this.resolveCb = [];
    this.rejectedCb = [];

    let _self = this;
    function resolve(data) {
        if (_self.status === 'pending') {
            this.data = data;
            this.status = 'resolved'
            this.resolveCb.forEach(func => {
                func()
            })
        }
    }

    function reject(data) {
        if (_self.status === 'pending') {
            this.data = data;
            this.status = 'rejected'
            this.rejectedCb.forEach(func => {
                func()
            })
        }
    }

    try {
        execute(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

_Promise.prototype.then = function (onresolve, onreject) {
    let that = this;
    onresolve = typeof onresolve === 'function' ? onresolve : function (val) { return val };
    onreject = typeof onreject === 'function' ? onreject : function (err) { throw err };

    let newPromise;
    if (that.status === 'resolved') {
        newPromise = new _Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let temp = onresolve(that.data);
                    if (temp instanceof _Promise) {
                        x.then(resolve, reject)
                    }
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (that.status === 'rejected') {
        newPromise = new _Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let temp = onreject(that.data);
                    if (temp instanceof _Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (that.status === 'pending') {
        that.resolveCb.push(() => {
            try {
                let temp = onresolve(that.data);
                if (temp instanceof _Promise) {
                    x.then(resolve, reject)
                }
                resolve(x)
            } catch (e) {
                reject(e)
            }
        })
        that.rejectedCb.push(() => {
            try {
                let temp = onreject(that.data);
                if (temp instanceof _Promise) {
                    x.then(resolve, reject)
                }
            } catch (e) {
                reject(e)
            }
        })
    }
    return newPromise
}

_Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

_Promise.resolve = function (data) {
    return new _Promise(resolve => resolve(data))
}

_Promise.reject = function (reason) {
    return new _Promise(null, reject => reject(reason))
}


_Promise.all = function (promiseArrs) { //在Promise类上添加一个all方法，接受一个传进来的promise数组
    return new _Promise((resolve, reject) => { //返回一个新的Promise
        let arr = []; //定义一个空数组存放结果
        let i = 0;
        function handleData(index, data) { //处理数据函数
            arr[index] = data;
            i++;
            if (i === promiseArrs.length) { //当i等于传递的数组的长度时 
                resolve(arr); //执行resolve,并将结果放入
            }
        }
        for (let i = 0; i < promiseArrs.length; i++) { //循环遍历数组
            promiseArrs[i].then((data) => {
                handleData(i, data); //将结果和索引传入handleData函数
            }, reject)
        }
    })
}