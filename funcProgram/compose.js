function hello(str) {
    return `hello ${str}`;
}
function tail(str) {
    return `tail ${str} `;
}
let ans = hello(tail('vickey'));
function compose(...func) {
    return function (...args) {
        let ans = func[0].apply(this, args);
        for (let i = 1; i < func.length; i++) {
            ans = func[i].call(this, ans); // 这里要传入上一个的结果   reduce / reduceRight
        }
        return ans;
    }
}
let composeFunc = compose(hello, tail);
let ans2 = composeFunc('vickey');
console.log(ans);
console.log(ans2)