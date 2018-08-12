// 给定一个二叉搜索树，同时给定最小边界L 
// 和最大边界 R。通过修剪二叉搜索树，
// 使得所有节点的值在[L, R]中 (R>=L) 。
// 你可能需要改变树的根节点，所以结果应当返回修剪好的二叉搜索树的新的根节点。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
    let left = L;
    let right = R;
    let node = trim(root)

    function trim(node) {
        if (node === null) {
            return null;
        } else if (node.val < left) {
            return trim(node.right);
        } else if (node.val > right) {
            return trim(node.left)
        } else {
            node.left = trim(node.left);
            node.right = trim(node.right);
            return node
        }
    }
    return node;
};