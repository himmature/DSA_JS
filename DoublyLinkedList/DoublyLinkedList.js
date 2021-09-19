class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let str = '';
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            let temp = node.val;
            str = str + temp;
            if (node.next) {
                node = node.next;
                str = str + '<--->'
            }
        }
        console.log(str);
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return null;
        let removedTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.prev;
            newTail.next = null
            this.tail = newTail
            this.length--;
            removedTail.prev = null;
        }
        return removedTail;
    }

    shift() {
        let removedHead = this.head;
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.next;
            this.head.prev = null;
            removedHead.next = null;
        }
        this.length--;
        return removedHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
    }

    get(index) {
        if(!this.head) return null;
        if(index < 0 || index >= this.length) return undefined;
        let mid = Math.floor((0 + this.length)/2);
        let node;
        if(index <= mid) {
            node = this.head;
            for(let i = 0; i < index; i++) {
                node = node.next;
            }
        } else {
            node = this.tail;
            for(let i = this.length - 1; i > index; i--) {
                node = node.prev;
            }
        }

        return node;
    }
    set(index, value) {
        let node = this.get(index);
        if(node) {
            node.val = value;
            return true;
        }
        return false;
    }
    insert(value, index) {
        if(index < 0 || index > this.length) return false;
        if(!this.head || index === this.length) {
            this.push(value);
        } else if(index === 0) {
            this.unshift(value);
            return true;
        } else {
            let newNode = new Node(value);
            let currentNode = this.get(index); 
            let prevNode = currentNode.prev; 
            newNode.next = currentNode; 
            newNode.prev = prevNode;
            currentNode.prev = newNode;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        let removedNode = this.get(index);
        if(removedNode) {
            if(!index){
                return this.shift();
            } else if(index === this.length - 1) {
                return this.pop();
            } else {
                let prevNode = removedNode.prev;
                let nextNode = removedNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                removedNode.next = null;
                removedNode.prev = null
                this.length--;
                return removedNode;
            }
        }   
        return false;
    }
}

let list = new DoublyLinkedList();
list.push('hi');
list.push('hello');
list.push('world');
list.push('how');
list.push('are');
list.push('you');

console.log(list);
