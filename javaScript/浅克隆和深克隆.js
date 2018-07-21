let obj = {
    a: 1,
    arr: [2, 3],
    obj: { a: 1, b: 2 },
    func: function test() { console.log(test) },
    date: new Date('1995-12-17T03:24:00'),
    reg: /\d{1,3}/g,
    u: undefined,
    n: null,
    str: 'string',
    boolean: true
};
obj.circle = obj


// let shallowObj = shallowCopy(obj);
// console.log(shallowObj)
// function shallowCopy(obj) {
//     if(typeof obj !== 'object') {
//         return;
//     }
//     let ans = obj instanceof Array ? [] : {};

//     for (let i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             ans[i] = obj[i];
//         }
//     }
//     return ans;
// }

const map = {
    "[object Date]": cloneDate,
    "[object Function]": cloneFunc,
    "[object RegExp]": cloneReg
}
let hasObj = []; // 复制过的复杂数据类型， 防止成环
function deepClone(obj) {
    let ans = obj instanceof Array ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (!(obj[i] instanceof Object)) { // 是否是基本数据类型
                ans[i] = obj[i]
            } else {
                let type = Object.prototype.toString.call(obj[i]);
                if (hasObj.indexOf(obj[i]) > -1) { // 有环时
                    ans[i] = obj[i];
                }
                else if (map[type]) {
                    ans[i] = map[type](obj[i]); // 对Date Reg Func特殊处理
                }
                else {
                    hasObj.push(obj[i])
                    ans[i] = deepClone(obj[i])
                }
            }
        }
    }
    return ans;
}


function cloneFunc(func) {
    let ans = new Function('return ' + func.toString())(); //参数也能复制
    return ans;
}

function cloneReg(reg) { // 正则
    let result = new RegExp(reg.source, reg.flags);
    result.lastIndex = reg.lastIndex;
    return result;
}

function cloneDate(time) {
    let ans = new Date(time.valueOf());
    return ans
}