var deleteDuplicates = function(head) {
    let temp = head;
    let prev = null;
    let Num = -99;
    while(temp != null) {
        if(temp.val === Num) {
            prev.next = temp.next;
            temp = temp.next
        } else {
            Num = temp.val;
            prev = temp;
            temp = temp.next;
        }        
    }
    return head
};

