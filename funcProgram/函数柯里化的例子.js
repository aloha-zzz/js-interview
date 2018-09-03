function add(num) {
    let val = num;
    return temp;

    function temp() {
        if (arguments.length === 0) {
            return val;
        } else {
            val += arguments[0];
            return temp
        }
    }
}
console.log(add(1)(2)())



function add2(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.valueOf = function () {
        return sum;
    };
    return tmp;
}

console.log(add2(1)(2)(3))
console.log(add2(1)(2)(3)(4))
