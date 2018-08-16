/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var lowestCommonAncestor = function(root, p, q) {
    if(root == null) {
        return null;
    }
    
    if(root === p || root === q) {
        return root;
    }
    if(root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if(root.val < p.val && root.val < p.val) {
        return lowestCommonAncestor(root.right, p, q);
    } 
    return root
};