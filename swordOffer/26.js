// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    let left = null;
    let right = null;
    if(pRootOfTree === null) {
        return null;
    }
    left = Convert(pRootOfTree.left);
    if(left != null){
        let head = left;
        while(head != null && head.right != null) {
            head = head.right;
        }
        head.right = pRootOfTree;
        pRootOfTree.left = head;
    } else {
        left = pRootOfTree;
    }

    right = Convert(pRootOfTree.right)
    if(right != null) {
        pRootOfTree.right = right;
        right.left = pRootOfTree
    }
    return left 
}