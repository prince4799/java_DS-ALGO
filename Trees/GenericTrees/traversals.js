

class Leaf {
    constructor(data) {
        this.value = data;
        this.children = []
    }
}

class generic_tree {

    constructor() {
        this.root = null;
        this.stack = []
    };


    insert(data) {
        if (data == null) return;
        if (data == -1 && this.stack.length == 0) {
            // this.stack.pop();
            return;
        } if (data == -1 && this.stack.length > 0) {
            this.stack.pop();
            return;
        }
        let leaf = new Leaf(data)
        if (this.stack.length == 0) {
            this.stack.push(leaf)
            this.root = leaf
        } else {
            this.stack[this.stack.length - 1].children.push(leaf)
            //.children.push(leaf)
            this.stack.push(leaf)
        }
    }
    //============================ Wrong method ======================
    inorder(node) {
        if (!node) return; // Base case: If the node is null, return
    
        for (const child of node.children) {
            this.inorder(child); // Traverse left subtree (children)
            process.stdout.write(child.value + ' '); // Visit current node (with space separator)
            process.stdout.write(node.value + ' '); // Visit current node (with space separator)
            this.inorder(child); // Traverse left subtree (children)

        }
    }
    peorder(node) {
        if (!node) return "Tree is empty."
        if (!node.value) return
        for (const child of node.children) {
            this.inorder(child); // Traverse left subtree (children)
        }
        process.stdout.write(node.value + ' '); // Visit current node (with space separator)
    }
    postorder(node) {
        if (!node) return "Tree is empty."
        if (!node.value) return
        process.stdout.write(node.value + ' '); // Visit current node (with space separator)
        for (const child of node.children) {
            this.inorder(child); // Traverse left subtree (children)
        }
    }
    
}

let tree = new generic_tree()
let arr = [10, 20,-1,30,50,-1,60,-1,-1,40]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert(arr[i])
}
tree.inorder(tree.root)
console.log();
// tree.display(tree.root)

// console.log(tree.root.children[1]);