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
        if(pos >= 0 && pos <= length) {
            if( length / 2 > pos) {
                while (pos !== 0) {
                    
                }
            }
        } else {
            throw new Error('pos wrong')
        }
    }
    this.removeAt = (pos) => {
        if(pos >= 0 && pos <= length) {

        } else {
            throw new Error('pos wrong')
        }
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