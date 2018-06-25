//  输入两棵二叉树A，B，判断B是不是A的子结构。
//（ps：我们约定空树不是任意一个树的子结构）
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if (pRoot2 === null) {
        return false;
    } else if (pRoot1 === null) {
        return false;
    } else {
        if (isEqual(pRoot1, pRoot2)) {
            return true;
        } else {
            return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
        }
    }
}

function isEqual(a, b) {
    if (b === null) {
        return true;
    } else if (a === null){
        return false
    } else if (a.val === b.val) {
        return (isEqual(a.left, b.left) && isEqual(a.right, b.right))
    } else {
        return false;
    }
}