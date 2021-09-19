class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    pop() {
        if (!this.first) return undefined;
        let removedfirst = this.first;
        this.first = removedfirst.next;
        if (this.size === 1) {
            this.last = this.first;
        }
        this.size--;
        return removedfirst;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let currentfirst = this.first;
            this.first = newNode;
            this.first.next = currentfirst
        }
        return ++this.size;
    }
    print() {
        let str = '';
        let node = this.first;
        for(let i = 0; i < this.size; i++) {
            let temp = node.val;
            str = str + temp;
            if(node.next) {
                node = node.next;
                str = str + '<---'
            }
        }
        console.log(str);
    }
}

let stack = new Stack();
stack.push('hi');
stack.push('hello');
stack.push('world');
stack.push('how');
stack.push('are');
stack.push('you');

console.log(stack);
