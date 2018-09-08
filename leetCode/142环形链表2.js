var detectCycle = function (head) {

    
    let node = hasCycle(head);
    if (node === false) {
        return null
    } else {
        let temp = head;
        while (temp != node) { // 相交节点
            temp = temp.next;
            node = node.next;
        }
        return temp
    }
   
};

function hasCycle(head) {
    if (head == null) {
        return false;
    }
    let one = head;
    let two = head;
    while (one.next != null && two.next != null) {
        one = one.next;
        if (one.next != null) {
            one = one.next
        } else {
            return false
        }
        two = two.next;
        if (one === two) {
            return one;
        }
    }
    return false
};

