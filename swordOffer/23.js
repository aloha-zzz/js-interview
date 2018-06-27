// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果
//。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length === 1){
        return true;
    } else if(sequence.length === 0){
        return false
    }
    return isBST(sequence)
}

function isBST(arr) {
    if(arr.length <= 2){
        return true
    } else {
        let after = arr.pop();
        let turn = false;
        let turnIndex = -1;
        for(let i = 0,len = arr.length; i < len; i++){
            if(turn && arr[i] < after){
                return false;
            }
            if(arr[i] > after && !turn){
                turn = true;
                turnIndex = i;
            } 
        }
        if(turnIndex === -1){
            return isBST(arr)
        } else{
            let preArr = arr.slice(0, turnIndex);
            let afterArr = arr.slice(turnIndex);
            return isBST(preArr) && isBST(afterArr);
        }
    }
}
