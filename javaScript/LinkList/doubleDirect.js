function LinkList(){
    function Node(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
    let length = 0;
    let head = null;
    let tail = null;


    this.append = (val) => {
        if(head === null) {
            let node = new Node(val)
            head = node;
            tail = node;
        } else {
            let temp = new Node(val);
            temp.prev = tail;
            tail.next = temp;
            tail = tail.next
        }
        length++;
    }

    this.insert = (pos, val) => {
        
    }
    this.removeAt = (pos) => {
        
    }
    this.showHead = () => {
        return head;
    }
    this.showLength = () => {
        return length;
    }
    this.showTail = () => {
        return tail
    }
}