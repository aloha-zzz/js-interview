/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 全扫一遍 不合适 中序遍历

var isValidBST = function(root) {
    if(root == null) return true;
    let arr = [];
    midFind(root);

    for(let i = 1; i < arr.length ; i++) {
        if(arr[i] <= arr[i - 1]) {
            return false
        }
    }    

    function midFind(node) {
        if(node == null) return;
        midFind(node.left);
        arr.push(node.val);
        midFind(node.right);
    }

    return true
};


