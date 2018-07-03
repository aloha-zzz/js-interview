// 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
// 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
// 但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
// 可以很快的求出任意非负整数区间中1出现的次数。


function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    
    let count = 0;
    for(let i = 1; i <=n ; i *= 10){
        let high =Math.floor(n / (i * 10)) 
        let a = Math.floor(n / i) % 10;   // 每一位
        let low = n % i
        if(a ===0) {
            count += high * i
        } else if (a === 1) {
            count += high * i +low + 1
        } else {
            count += (high +1) * i
        }
    }
    return count
}   