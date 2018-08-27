// function isSymmetrical(pRoot)
// {
//     // write code here
//     if(pRoot == null) return true;
//     return compare(pRoot.left, pRoot.right);
// }

// function compare(left, right) {
//     if(left == null && right == null) return true;
//     if(left == null && right !== null || left !== null && right === null) return false;
//     if(left.val !== right.val ) return false;
//     return compare(left.left, right.right) && compare(left.right, right.left)
// }

// ------

function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot == null) return true;
    let q1 = [];
    let q2 = [];

    q1.push(pRoot.left);
    q2.push(pRoot.right);


    while(q1.length > 0 && q2.length > 0) {
        let left = q1.pop();
        let right = q2.pop();

        if(left == null && right == null) continue;
        if(left == null && right != null || left != null && right == null) {
            return false
        }
        if(left.val !== right.val) return false

        q1.push(left.left);
        q1.push(left.right);

        q2.push(right.right);
        q2.push(right.left)

    }

    return true
}
