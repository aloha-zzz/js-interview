function LinkedList() {
    /**
     * 单向链表中节点的构造函数
     * @param {Any} val 要传入链表的节点
     */
    function Node(val) {
        this.val = val;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = (val) => { //添加元素到链表尾部
        if (head === null) {
            head = new Node(val);
        } else {
            let temp = head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new Node(val);
        }
        length++;
    }

    this.insert = (pos, val) => {
        if (pos >= 0 && pos <= length) {
            if (pos === 0) {
                let temp = head;
                head = new Node(val);
                head.next = temp;
            } else {
                let temp = head;
                while (pos !== 1) {
                    pos--;
                    temp = temp.next;
                }
                let mid = temp.next;
                temp.next = new Node(val);
                temp.next.next = mid;
            }
            length++
        } else {
            throw new Error('pos wrong')
        }

    }

    this.getIndexOf = (val) => {
        let temp = head;
        let posArr = [];
        let index = 0
        while (temp !== null) {
            if (temp.val === val) {
                posArr.push(index)
            }
            index++;
            temp = temp.next
        }
        return posArr.toString()
    }

    this.remove = (val) => {
        let temp = head;
        let prev = null;

        while (temp !== null) {
            if (temp.val === val) { // 注意头部的处理
                if(temp === head) {
                    temp = temp.next;
                    head = temp;
                    prev = temp;
                } else {
                    prev.next = temp.next;
                    temp = prev.next;
                }
                length--;
            } else {
                prev = temp;
                temp = temp.next
            }
        }


    } //移除给定的元素

    this.removeAt = (pos) => {
        if (pos >= 0 && pos <= length - 1) {
            if (pos === 0) {
                head = head.next;
            } else {
                let temp = head;
                let prev = null
                while (pos !== 0) {
                    prev = temp;
                    pos--;
                    temp = temp.next;
                }
                prev.next = temp.next;
            }
            length--;
        } else {
            throw new Error('pos wrong')
        }
    }//移除单向链表中某个位置的元素

    this.getHead = () => {
        return head
    }//获取单向链表的头部

    this.isAmpty = () => {// 检查单向链表是否为空，为空则返回true
        if (head === null) {
            return true
        }
        return false
    }

    this.toString = () => {
        let arr = [];
        let temp = head;
        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next
        }
        return arr.toString()
    } //将链表所有内容以字符串输出

    this.size = () => {
        return length;
    } //返回单向链表长度

}
