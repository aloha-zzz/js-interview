//  输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径
// 。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径

// 这个 null 应该不用加啊

function FindPath(root, expectNumber) {
    if (root === null) {
        return []
    }
    let ans = [];
    search(root, [], expectNumber, ans)
    return ans
}

function search(node, arr, expectNumber, ans) {
    let newArr = arr.slice(0);
    newArr.push(node.val)
    expectNumber = expectNumber - node.val;
    if (expectNumber === 0 && node.left === null && node.right === null) {
        ans.push(newArr)
    } else {
        if (node.left) {
            search(node.left, newArr, expectNumber, ans);
        }
        if (node.right) {
            search(node.right, newArr, expectNumber, ans);
        }
    }
}

