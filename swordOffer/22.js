// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function PrintFromTopToBottom(root)
{   
    let queue = [];
    let ans = [];
    let temp = null;
    if(root === null) {
        return [];
    } else {
        queue.push(root);
        while(queue.length !== 0) {
            temp = queue.shift();
            ans.push(temp.val)

            if(temp.left !== null) {
                queue.push(temp.left)
            }

            if(temp.right !== null) {
                queue.push(temp.right)
            }
        }
    }
    return ans
}