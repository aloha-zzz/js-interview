
//用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型

function Stack() {
    let arr = [];
    this.pop = () => arr.pop();

    this.push = (val) => {
        arr.push(val)
    }
    this.isNull = () => arr.length === 0 ? true : false
}


let a = new Stack();
let b = new Stack();
function push(node) {
    a.push(node)
}

function pop() {
    if (b.isNull()) {
        while (!a.isNull()) {
            b.push(a.pop());
        }
    }
    return b.pop()
}