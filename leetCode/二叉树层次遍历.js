var levelOrder = function (root) {
    let ans = [];
    if (root === null) {
        return ans;
    }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let arr = queue.slice(0);
        queue = []
        let temp = [];
        let nextLine = [];
        arr.forEach(item => {
            temp.push(item.val);
            if (item.left) {
                nextLine.push(item.left);
            } 
            if (item.right) {
                nextLine.push(item.right);
            }
        })
        queue.push(...nextLine);
        ans.push(temp)
    }
    return ans
};
