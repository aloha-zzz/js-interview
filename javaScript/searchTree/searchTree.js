function searchTree() {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    let root = null;

    this.showRoot = () => root

    this.insert = (val) => {
        let newNode = new TreeNode(val);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    function insertNode(node, newNode) {
        if(newNode.val > node.val) {
            if(node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        } else {
            if(node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        }
    }

    this.inOrderTraverse = () => { // 中序遍历
        let ans = [];
        function getMidAnswer(node) {
            if(node !== null) {
                getMidAnswer(node.left);
                ans.push(node.val);
                getMidAnswer(node.right)
            }
        }
        getMidAnswer();
        return ans
    }

 

    this.preOrderTraverse = () => {
        let ans = [];
        function getFrontAnswer(node) {
            if(node !== null) {
                ans.push(node.val);
                getFrontAnswer(node.left);
                getFrontAnswer(node.right)
            }
        }
        getFrontAnswer();
        return ans
    }

    this.postOrderTraverse = () => {
        let ans = [];
        function getAfterAnswer(node) {
            if(node !== null) {
                ans.push(node.val);
                getAfterAnswer(node.left);
                getAfterAnswer(node.right)
            }
        }
        getAfterAnswer();
        return ans
    }
    



    this.min = () => {// 返回树中最小的值
        let ans = -1;
        function getMin(node){
            if(node === null) {
                return;
            } else {
                ans = node.val;
                getMin(node.left)
            }
        }    
        getMin(root);
        return ans;
    }   

    this.max = () => {
        let ans = -1;
        function getMax(node){
            if(node === null) {
                return;
            } else {
                ans = node.val;
                getMax(node.right)
            }
        }    
        getMax(root);
        return ans;
    }
    
    this.search = (key) => { // 搜索某个值，在树中则返回true

        function searchTree(node, key) {
            if(node === null){
                return false;
            } else if (node.val === key) {
                return true;
            } else if (key > node.val) {
                searchTree(node.right, key)
            } else {
                searchTree(node.left, key)
            }
        }
        searchTree(root, key);
    }
    

    this.remove = (key) => { // 从树中移除某个键
        if (this.search(key)) {
            function removeNode(node, key) {
                
            }

        } else {
            throw new Error('no key')
        }

    }

    // 注意这种错误写法。。 

    // this.insert = (val) => { 
    //     let newNode = new TreeNode(val);
    //     insertNode(root, newNode)
    // }

    // function insertNode(node, newNode) {
    //     console.log(node)
    //     if(node === null) {
    //         node = newNode;
    //     } else if(node.val > newNode.val){
    //         insertNode(node.left, newNode)
    //     } else {
    //         insertNode(node.right, newNode)
    //     }
    // }
}
let a = new searchTree();
a.insert(1)
let root = a.showRoot()