// avl


function IsBalanced_Solution(pRoot)
{
    // write code here
    if(pRoot === null) {
        return true;
    }
    let left = maxDepth(pRoot.left);
    let right = maxDepth(pRoot.right);
    if(left - right >= 2 || left - right <= -2){
        return false
    }else {
        return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
    }
}

function maxDepth(root) {
    if(root === null) {
        return 0;
    } else {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
}