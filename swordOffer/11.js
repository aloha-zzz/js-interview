// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n)
{
    // write code here
    if(n < 0){
       n = n >>> 0; // 负数的补码
    }
    let ans = 0
    while (n > 0){
        if(n % 2 === 1){
            ans++;
        }
        n = Math.floor(n / 2) 
    }
    return ans
}