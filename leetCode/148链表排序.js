var sortList = function(head) {
    
};

function getMiddle(node) {
    if(node == null) {
        return node;
    }
    let fast, slow;
    slow = fast = node;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function merge(a, b) {
    
}