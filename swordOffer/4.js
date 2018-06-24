// 输入某二叉树的前序遍历和中序遍历的结果，
// 请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
// 则重建二叉树并返回。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    let ans = null;
    if(pre.length === 0){
        return;
    } else if (pre.length === 1) {
        ans = new TreeNode(pre[0])
    }
    let mid = pre[0];
    let midIndex = vin.indexOf(mid)
    let leftVin = vin.slice(0, midIndex);
    let rightVin = vin.slice(midIndex + 1);

    let leftPre = pre.slice(1, midIndex + 1)
    let rightPre = pre.slice(midIndex + 1)
    ans = new TreeNode(mid);

    ans.left = reConstructBinaryTree(leftPre, leftVin);
    ans.right = reConstructBinaryTree(rightPre, rightVin)
    return ans
}