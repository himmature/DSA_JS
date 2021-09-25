class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(newNode.val === currentNode.val) return undefined;
                if(newNode.val > currentNode.val) {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }
        return this;
    }

    contains(val) {
        if(!this.root) return false;
        let currentNode = this.root;
        if(val === this.root.val) return true;
        while(true) {
            if(val > currentNode.val) {
                if(!currentNode.right) return false;
                if(val === currentNode.right.val) return true;
                currentNode = currentNode.right;
            } else {
                if(!currentNode.left) return false;
                if(val === currentNode.left.val) return true;
                currentNode = currentNode.left;
            }
        }
    }

    traverse_BFS() {
        if(!this.root) return undefined;
        let queue = [];
        let finalList = [];
        queue.push(this.root);
        while(queue.length) {
            let currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            finalList.push(currentNode);
        }
        return finalList;
    }
}

const tree = new BinarySearchTree();

tree.insert(6);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(8);
tree.insert(0);