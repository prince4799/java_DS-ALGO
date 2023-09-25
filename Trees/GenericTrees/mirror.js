

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
        }if (data == -1 && this.stack.length > 0) {
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

    displayMirror(node){

        if(!node.value) return
        if(node.children.length>0){
            let length_of_child=(node.children.length)/2-1
            for(let i=0;i<=length_of_child;i++){
                process.stdout.write(`   `);
            }
        }
        if(node.children[0]!=null)
        console.log(`${node.value}`);

        
        console.log();
        for (const child of node.children.reverse()) {
            process.stdout.write(`${child.value} `);
        }
        console.log();
        for (const child of node.children) {
            this.displayMirror(child);
        }

    }

    
 
}

let tree= new generic_tree()
let arr=[10,20,50,-1,60,-1,-1,30,70,-1,80,110,-1,120,-1,-1,90,-1, -1, 40,100, -1,-1,-1]
for (i=0;arr[i]!=undefined;i++){
    tree.insert(arr[i])
}
tree.displayMirror(tree.root)