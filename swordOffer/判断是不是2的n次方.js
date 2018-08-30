/**
 *  判断一个数是不是n的 2次方
 */

let ans = []
function test(num) {
    if((num & (num - 1)) == 0) { // 运算符优先级
        ans.push(num)
    }
}
for (let i = 1; i <= 1024; i++) {
    test(i);
}

console.log(ans)

