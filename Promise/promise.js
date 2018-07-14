function Promise(cb) {
    this.status = 'pending';
    this.data = void 0
    
}

new Promise((resolve, reject) => {
    resolve(1)
})

function asyncRun() {

    function next(i, arr) {
        if (i === arr.length - 1) {
            return
        }
        img.src = [i];
        img.onload = function () {
            next()
        }
    }
}



function loadImageAsync(i) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}
/**
 * promise 缺点
 * 1. 无法取消Promise
 * 2. 如果不加catch. Promise内部的错误不会反应到外面
 *    
 * 3. pending状态 不知道内部执行状况
 * 
 *   resolve或reject并不会终结 Promise 的参数函数的执行
 * 
 *  promise.then 可以传两个参数 第一个是resolve 第二个是 reject时的
 *  顺序执行。 没有错误。跳过catch
 *  有错误，知道往下找到最近的catch 执行
 *  Promise 对象的错误具有“冒泡”性质，会一直向后传递，
 *  直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获
 * 
 *  finally 无论resolve reject 都会返回原来的值
 *  Promise.all 全部resolve 或者有一个reject 就会中止
 *  Promise.resolve 是在本轮 事件循环结束// 微任务
 */

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
// Error: fail

new Promise((resolve, reject) => {
    resolve(1)
}).then(data => data + 1)
    .then(data => a)
    .catch(err => 'err')
    .then(data => console.log(data))

// Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
// 也就是说，错误总是会被下一个catch语句捕获。