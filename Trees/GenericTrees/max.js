

class leaf {
    constructor(data) {
        this.value = data,
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
        }if (data == -1 && this.stack.length > 0) {
            this.stack.pop();
            return;
        }
        let node = new leaf(data)
        if (this.stack.length == 0) {
            this.root = node
            this.stack.push(node)
        } else {
            this.stack[this.stack.length - 1].children.push(node)
            this.stack.push(node)
        }
    }
    maximum( node){
        if(!node)return "Tree is empty"

        let max= -Infinity

        for (let item of node.children){
            let max_child= this.maximum(item)
            max=Math.max(max,max_child)
        }
        max= Math.max(node.value,max)
        return max;
    }
}

const tree = new generic_tree()
// const arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
const arr = [-1, 5, -1]

for (i = 0; arr[i] != undefined; i++) {
    tree.insert(arr[i])
}
const maximum=tree.maximum(tree.root)
console.log(maximum);