

class Leaf {
    constructor(data) {
        this.value = data;
        this.children = []
    }
}

class generic_tree {
    constructor() {
        this.root = null;
        this.stack = [];
    }

    insert_node(data) {

        if (!data) return;

        if (data == -1) {
            if (this.stack.length > 0)
                this.stack.pop()
            return;
        }
        let node = new Leaf(data)
        if (this.stack.length == 0) {
            this.stack.push(node)
            this.root = node;
        }
        else {
            this.stack[this.stack.length - 1].children.push(node)
            this.stack.push(node)
        }
    }

    find_node(node, data,subtree) {
        if (!data) return 'Please provide valid data as nulll is not find';

        if (node.value === data)
            return `${data} found under subtree of ${subtree.value} `
        
            for (let child of node.children) {
            let result = this.find_node(child, data,node)
            if (result.includes("subtree")) {
                return result; // Return the result if found
            }
        }
        
        return `${data} not found`

    }
}

let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert_node(arr[i])
}
let find_leaf = tree.find_node(tree.root, 40,tree.root)
console.log(find_leaf);