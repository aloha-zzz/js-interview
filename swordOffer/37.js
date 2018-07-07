// 统计一个数字在排序数组中出现的次数。

function GetNumberOfK(data, k)
{
    // write code here
    if(data.length === 0){
        return 0;
    }

    let num1 = data.indexOf(k);
    if(num1 === -1) {
        return 0
    }
    let num2 = data.lastIndexOf(k);
    return num2 - num1 + 1;
}

