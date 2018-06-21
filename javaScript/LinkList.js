

function Node(val) {
    this.node = val;
    this.next = null;
}
function LinkList(...arg) {
    let head = null;
    
    arg.map(item => {
        if(head === null){
            head = new Node(item);
        } else {
            let temp = head;
            head = new Node(item);
            head.next = temp;
        }
    })
    console.log(head)
}
LinkList(1,2,3,4)

