//  大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
//  n<=39


function Fibonacci(n)
{   
    if(n === 0) {
        return 0;
    } else if (n === 1){
        return 1;
    } else {
        let ans = 0;
        let f = [0, 1]
        for(let i = 2;i <= n ; i++){
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[n]
    }
    
 
}