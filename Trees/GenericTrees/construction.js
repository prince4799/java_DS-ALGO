

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
}

let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert(arr[i])
}

console.log(tree);