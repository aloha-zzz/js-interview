let obj = { 
    a: 1, 
    arr: [2, 3], 
    obj: { a: 1, b: 2 }, 
    func: function test() { console.log(test) },
    date: new Date('1995-12-17T03:24:00'),
    u: undefined,
    n: null,
    str: 'string',
    boolean: true
};
let shallowObj = shallowCopy(obj);

function shallowCopy(obj) {
    let ans = {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            ans[i] = obj[i];
        }
    }
    return ans;
}


function deepClone(obj) {
    let ans = {};
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            ans[i] = deepClone(obj[i])
        } else {
            ans[i] = obj[i];
        }
    }
    return ans;
}

