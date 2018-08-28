function LinkList() {
    function Node(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
    let length = 0;
    let head = null;
    let tail = null;


    this.append = (val) => {
        if (head === null) {
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
        if (pos >= 0 && pos <= length) {
            let temp = head;
            while (pos !== 0) {
                pos--;
                temp = temp.next;
            }
            let before = temp.prev;
            let newNode = new Node(val);
            before.next = newNode;
            newNode.prev = before;
            temp.prev = newNode;
            newNode.next = temp;
            length++;
        } else {
            throw new Error('pos wrong')
        }
    }
    this.removeAt = (pos) => {
        if (pos >= 0 && pos <= length - 1) {
            let temp = head;
            let before = null;
            let after = null;
            if (pos === 0) {
                head = head.next;
                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (pos === length - 1) {
                tail = tail.prev;
                tail.next = null
            } else {
                while (pos !== 0) {
                    pos--;
                    temp = temp.next;
                }
                before = temp.prev
                after = temp.next;
                before.next = after;
                after.prev = before;
            }


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