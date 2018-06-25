// 输入两个整数序列，第一个序列表示栈的压入顺序，
// 请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。
// 例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，
// 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

function IsPopOrder(pushV, popV)
{
    // write code here
    let arr =[];
    let len = popV.length;
    let j = 0;
    for(let i = 0; i < len; i++) {
        arr.push(pushV[i]);
        if(arr.indexOf(popV[j]) > -1 ){
            if(arr.indexOf(popV[j]) === arr.length - 1){
                j++;
                arr.pop();
            } else {
                return false
            }
        }
    }
    if(arr.length === 0){
        return true
    } else {
        let after = popV.slice(j).reverse()
        if(after.toString() === arr.toString()){
            return true;
        } else {
            return false
        }
    }
}

