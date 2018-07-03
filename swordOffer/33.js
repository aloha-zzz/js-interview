// 把只包含因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含因子7。
//  习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。


function GetUglyNumber_Solution(index)
{
    // write code here
    if(index === 0) {
        return 0;
    }
    let uglyNum = [1];
    let factor2 = 0;
    let factor3 = 0;
    let factor5 = 0;
    for(let i = 1; i < index; i++) {
        uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
        if (uglyNum[i] === uglyNum[factor2] * 2) factor2++;
        if (uglyNum[i] === uglyNum[factor3] * 3) factor3++;
        if (uglyNum[i] === uglyNum[factor5] * 5) factor5++; // 之前丑数的序号
    }
    return uglyNum[index-1]
}