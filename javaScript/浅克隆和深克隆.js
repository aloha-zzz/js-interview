var obj = { 
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

var obj = {
    reg: /\d{1,3}/g
}
let shallowObj = shallowCopy(obj);
console.log(shallowObj)
function shallowCopy(obj) {
    if(typeof obj !== 'object') {
        return;
    }
    let ans = obj instanceof Array ? [] : {};

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            ans[i] = obj[i];
        }
    }
    return ans;
}


function deepClone(obj) {
    let hasObj = [];
    if(typeof obj !== 'object') {
        return;
    } 
    let ans = obj instanceof Array ? [] : {};
    for (let i in obj) {
        if(obj.hasOwnProperty(i)){
            if(typeof obj[i] !== 'object' && obj[i] !== null) {
                ans[i] = deepClone(obj[i])
            } else {
                ans[i] = obj[i]
            }
        }
    }
    return ans;
}


function cloneFunc(func) {
    let ans = new Function('return '+func.toString())(); //参数也能复制
    return ans;
}

function cloneReg(reg) { // 正则
    let result = new RegExp(reg.source, reg.flags);
    result.lastIndex = reg.lastIndex;
    return result;
}

function cloneDate(time){
    let time = new Date(time.valueOf());
    return time
}