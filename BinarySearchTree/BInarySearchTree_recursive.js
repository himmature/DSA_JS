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

    traverse_BFS() {
        if(!this.root) return undefined;
        let queue = [];
        let finalList = [];
        queue.push(this.root);
        const traverseTree = () => {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            finalList.push(node);
            if(queue.length) return traverseTree();
            else return finalList;
        }        
        return traverseTree();
    }

    traverse_DFS_preOrder() {
        if(!this.root) return undefined;
        let finalList = [];
        let currentNode = this.root;
        const traverseTree = (node) => {
            finalList.push(node);
            if(node.left) traverseTree(node.left);
            if(node.right) traverseTree(node.right);
        }
        traverseTree(currentNode);
        return finalList;
    }

    traverse_DFS_postOrder() {
        if(!this.root) return undefined;
        let finalList = [];
        let currentNode = this.root;
        const traverseTree = (node) => {
            if(node.left) traverseTree(node.left);
            if(node.right) traverseTree(node.right);
            finalList.push(node);
        }
        traverseTree(currentNode);
        return finalList;
    }

    traverse_DFS_inOrder() {
        if(!this.root) return undefined;
        let finalList = [];
        let currentNode = this.root;
        const traverseTree = (node) => {
            if(node.left) traverseTree(node.left);
            finalList.push(node);
            if(node.right) traverseTree(node.right);
        }
        traverseTree(currentNode);
        return finalList;
    }
}

const tree = new BinarySearchTree();

tree.insert(7);
tree.insert(4);
tree.insert(12);
tree.insert(1);
tree.insert(6);
tree.insert(9);
tree.insert(16);
tree.insert(5);


//     6
//   1   7
// 0   3

// preOrder ----> node left right
// 6,1,0,3,7

// postOrder  ---> left right node
// 0,3,1,7,6

// inOrder ---> left node right
// 0,1,3,6,7
// side effect: outputs a sorted list of nodes in ascending order
