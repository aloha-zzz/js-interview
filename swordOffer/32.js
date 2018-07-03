
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数
// ，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，
// 则打印出这三个数字能排成的最小数字为321323。


// 关键 转成字符串相加
function PrintMinNumber(numbers)
{
    // write code here
    let arr = numbers;
    for(let i = 0, len = arr.length;i < len ; i++ ){
        for(let j = 0; j < len - i - 1; j++){
            if(Number(arr[j].toString() + arr[j + 1].toString()) > Number(arr[j + 1].toString() + arr[j].toString())){
                swap(arr, j, j + 1 );
            }
        }
    }
    return arr.join('')
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}