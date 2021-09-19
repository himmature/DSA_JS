class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode; //this line will change the next property of first to new node
            this.last = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (!this.first) return undefined;
        let removedfirst = this.first;
        this.first = removedfirst.next;
        if (this.size === 1) {
            this.last = this.first;
        }
        this.size--;
        return removedfirst;
    }
    print() {
        let str = '';
        let node = this.first;
        for(let i = 0; i < this.size; i++) {
            let temp = node.val;
            str = str + temp;
            if(node.next) {
                node = node.next;
                str = str + '--->'
            }
        }
        console.log(str);
    }
}

let queue = new Queue();
queue.enqueue('hi');
queue.enqueue('hello');
queue.enqueue('world');
queue.enqueue('how');
queue.enqueue('are');
queue.enqueue('you');

console.log(queue);

// list.pop();
// console.log(list);