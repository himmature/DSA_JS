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
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //this line will change the next property of head to new node
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if(this.length === 0) return undefined;
        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(!this.length) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    shift() {
        if(!this.head) return undefined;
        let removedHead =  this.head;
        this.head = removedHead.next;
        if(this.length === 1) {
            this.tail = this.head;
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
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('hello');
list.push('world');
list.push('how');
list.push('are');
list.push('you');

console.log(list);

list.pop();
console.log(list);