/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var lowestCommonAncestor = function(root, p, q) {
    if(root == p || root == null || root == q) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(left && right) {
        return root;
    }
    if(left === null) {
        return right;
    }
    if(right === null) {
        return left
    }
};