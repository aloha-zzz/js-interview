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


let a = new Stack();  // 2,5,3,6,1,7
let b = new Stack();  // 2,2,2,2,1,1 O(1) 找最小值
// 辅助栈



function push(node)
{
    // write code here
    a.push(node);

    b.push(b.top() < node ? b.top() : node)
}
function pop()
{

    a.pop();
    b.pop();
    // write code here
}
function top()
{
    return a.top()
    // write code here
}
function min()
{
    return b.top()
    // write code here
}