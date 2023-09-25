/**
 * Creation
 * Push 
 * Pop
 * Top
 * Peek
 * Size
 * Isempty
 */

class Stack {
    constructor() {
        this.stack = []
    }

    traverse() {
        let item = this.size()
        while (this.stack) {

        }
    }

    push(item) {
        this.stack.push(item);
        return true;
    }

    pop() {
        if (this.isEmpty) {
            console.log('The stack is empty.');
            return false;
        }
        let item = this.stack.pop();
        console.log(`${item} is popped from the stack`);
        return true;
    }

    top() {
        if (this.isEmpty) {
            console.log('The stack is empty.');
            return null

        }
        let item = this.stack[this.stack.length];
        console.log(`${item} is top element of stack`);
        return item;

    }

    peek(pos) {
        if (this.isEmpty) {
            console.log('The stack is empty.');
            return null
        }
        let item = this.stack[pos]
        console.log(`${item} is at ${pos} in the dtack`);
        return item;
    }

    size() {
        if (this.isEmpty) {
            console.log('The stack is empty.');
            return 0;
        }
        let item = this.stack.length
        console.log(`Size of stack is ${item}`);
        return item;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

const stack = new Stack;

stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)

console.log("stack", stack);