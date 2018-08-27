/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Node (x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let head = new Node(8)
head.left = new Node(6)
head.right = new Node(10)
head.left.left = new Node(5)
head.left.right = new Node(7)




// ---------
function KthNode(pRoot, k)
{
    // write code here

    let index = 0;
    function midOut(node, k){
        if(node !== null) {
            let ans1 = midOut(node.left, k);
            if(ans1 != null) return ans1
            index ++ ;
            if(index === k) {
                return node;
            }

            let ans2 = midOut(node.right, k);
            if(ans2 != null) return ans2
        }
        return null
    }

    return midOut(pRoot, k)
    
}