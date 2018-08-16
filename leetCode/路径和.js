/**
 * Definition for a binary tree node.

 */


/** 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
  * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */


function TreeNode(val) {
    if (!(this instanceof TreeNode)) {
        return new TreeNode(val)
    }
    this.val = val;
    this.left = this.right = null;
}


var root = TreeNode(5);
root.left = TreeNode(4);
root.left.left = TreeNode(11);
root.left.left.left = TreeNode(7)
root.left.left.right = TreeNode(2)

root.right = TreeNode(8);
root.right.left = TreeNode(13);
root.right.right = TreeNode(4);
root.right.right.left = TreeNode(5);
root.right.right.right = TreeNode(1)

var pathSum = function (root, sum) {
    let ans = [];
    if (root === null) {
        return ans;
    }
    if(root.val === sum && root.left === null && root.right === null) {
        ans.push([root.val]);
        return ans
    }
    let rootVal = root.val;
    if(root.left){
        dfs(root.left, sum - rootVal, [root.val])
    }
    if(root.right) {
        dfs(root.right, sum - rootVal, [root.val])

    }
    function dfs(node, num, line) {
        let newLine = line.slice(0);
        newLine.push(node.val);
        if (node.left == null && node.right == null && node.val === num) {
            ans.push(newLine);
        }
        if (node.left) {
            dfs(node.left, num - node.val, newLine)
        }
        if (node.right) {
            dfs(node.right, num - node.val, newLine)
        }
    }

    return ans;
};
pathSum(root, 22)