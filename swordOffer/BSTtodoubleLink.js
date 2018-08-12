// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

function Node(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var a = new Node(12)
a.left = new Node(8);
a.left.left = new Node(4)
a.left.right = new Node(9);
a.right = new Node(16);
a.right.left = new Node(15);
a.right.right = new Node(17)


function Convert(pRootOfTree) {
    if (pRootOfTree == null) {
        return null;
    }
    if (pRootOfTree.left == null && pRootOfTree.right == null) {
        return pRootOfTree;
    }

    let left = Convert(pRootOfTree.left);
    if (left) {
        let p = left;
        while (p.right != null) {
            p = p.right;
        }
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
    let right = Convert(pRootOfTree.right);
    if (right) {
        pRootOfTree.right = right;
        right.left = pRootOfTree;
    }

    return left == null ? pRootOfTree : left
}
// -----



