class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //this line will change the next property of head to new node
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if (this.length === 0) return undefined;
        let currentNode = this.head;
        let newTail = currentNode;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    shift() {
        if (!this.head) return undefined;
        let removedHead = this.head;
        this.head = removedHead.next;
        if (this.length === 1) {
            this.tail = this.head;
        }
        this.length--;
        return removedHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead
        }
        return ++this.length;
    }
    flush() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    get(index) {
        if (!this.length || index < 0 || index > this.length - 1) return undefined;
        let counter = 0;
        let node = this.head;
        while (counter < index) {
            node = node.next;
            counter++;
        }
        return node;
    }
    set(val, index) {
        let currentNode = this.get(index);
        if (!currentNode) return false
        currentNode.val = val;
        return true;
    }
    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (!index) { 
            this.unshift(val)
        }
        else if (index === this.length) { 
            this.push(val) 
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(index - 1);
            let nextNode = this.get(index);
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        let currentNode = this.get(index);
        if(!currentNode) return false;
        if(!index) {
            this.shift();
        } else if(index === this.length - 1) {
            this.pop();
        } else {
            let prevNode = this.get(index - 1);
            let nextNode = this.get(index + 1);
            prevNode.next = nextNode;
            this.length--;
        }
        return currentNode;
    }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('hello');
list.push('world');
list.push('how');
list.push('are');
list.push('you');

console.log(list);

// list.pop();
// console.log(list);