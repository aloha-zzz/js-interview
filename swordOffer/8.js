// 一只青蛙一次可以跳上1级台阶，也可以跳上2级
//。求该青蛙跳上一个n级的台阶总共有多少种跳法。

function jumpFloor(number)
{
    // write code here
    if(number === 1){
        return 1;
    } else if(number === 2){
        return 2
    } else {
        let ans = 0;
        let f = [0, 1, 2];
        for(let i = 3; i <= number; i++){
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[number]
    }
}