// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
function Stack(){
    let arr = [];
    this.push = (node) => {
        arr.push(node)
    }
    this.pop = () => {
        return arr.pop()
    }
    this.size = () => arr.length;
    this.top = () => arr[arr.length - 1];

}


let a = new Stack();
let b = new Stack()

function push(node)
{
    a.push(node)
}

function pop()
{
    a.pop();
}

function top()
{
    return a.top()
}

function min()
{
    // write code here
    if(a.size() === 0){
        return -1
    }

    let ans = a.top();
    while(a.size() !== 0){
        if(a.top() < ans){
            ans = a.top()
        }
        b.push(a.pop()); 
    }
    while(b.size() !== 0){ // 恢复
        a.push(b.pop())
    }

    return ans;
}


