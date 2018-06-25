// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，
// 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
function reOrderArray(array) // 另一种办法 ，不添加空间
{
    // write code here
    let preArr = []
    let afterArr = [];
    array.map(item => {
        if(item % 2 === 0){
            afterArr.push(item)
        } else {
            preArr.push(item)
        }
    })
    return preArr.concat(afterArr)
}

