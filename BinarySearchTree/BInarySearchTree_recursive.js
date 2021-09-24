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
            return this;
        } 

        const inserted = (val, currentNode = this.root) => {
            if(val > currentNode.val) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                return inserted(val, currentNode.right);
            } else {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                return inserted(val, currentNode.left);
            }
        }

        return inserted(val);
    }

    contains(val) {
        if(!this.root) return false;
        let currentNode = this.root;
        if(val === currentNode.val) return true;

        const checkContains = (val, currentNode = this.root) => {
            if(val > currentNode.val) {
                if(!currentNode.right) return false;
                if(val === currentNode.right.val) return true;
                return checkContains(val, currentNode.right);
            } else {
                if(!currentNode.left) return false;
                if(val === currentNode.left.val) return true;
                return checkContains(val, currentNode.left);
            }
        }
        return checkContains(val)
    }
}

const tree = new BinarySearchTree();

tree.insert(6);
tree.insert(7);
tree.insert(1);
tree.insert(3);