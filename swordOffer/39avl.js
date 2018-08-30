// avl


// function IsBalanced_Solution(pRoot)
// {
//     // write code here
//     if(pRoot === null) {
//         return true;
//     }
//     let left = maxDepth(pRoot.left);
//     let right = maxDepth(pRoot.right);
//     if(left - right >= 2 || left - right <= -2){
//         return false
//     }else {
//         return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
//     }
// }

// function maxDepth(root) {
//     if(root === null) {
//         return 0;
//     } else {
//         return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
//     }
// }


// ---------------------------------------------------------------------------



// function IsBalanced_Solution(pRoot)
// {
//     // write code here

//     let ans = getDepth(pRoot);
//     if (ans == -1) return false
//     return true

// }

// function getDepth(node) {
//     if(node === null) {
//         return 0;
//     }

//     let left = getDepth(node.left);
//     if(left == -1) return -1;
//     let right = getDepth(node.right);
//     if(right == -1) return -1

//     if(left - right > 1 || right - left > 1) return -1; 

//     return Math.max(left, right) + 1
// }


// ------------------------------




let isBalanced = true;
function IsBalanced_Solution(pRoot) {
    // write code here

    getDepth(pRoot)

    return isBalanced
}


function getDepth(node) {
    if (node == null) {
        return 0;
    }
    let left = getDepth(node.left);
    let right = getDepth(node.right);

    if (Math.abs(left - right) > 1) {
        isBalanced = false
    }
    return Math.max(left, right) + 1 // 返回高度
}