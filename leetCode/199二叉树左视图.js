// * Definition for a binary tree node.
// * function TreeNode(val) {
// *     this.val = val;
// *     this.left = this.right = null;
// * }
// *
var rightSideView = function(root) {
    let ans = [];
    let queue = [];
    if(root == null) {
        return ans;
    }
    queue.push(root);
    while(queue.length !== 0) {
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let temp = queue.shift();
            if(i === len - 1) {
                ans.push(temp.val)
            }
            if(temp.left) {
                queue.push(temp.left)
            }
            if(temp.right) {
                queue.push(temp.right);
            }
        }
    }
    return ans
};