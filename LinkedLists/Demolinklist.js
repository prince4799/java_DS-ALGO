function createNode(data) {
    return {
        data: data,
        prev: null,
        next: null
    };
}

function createDoublyLinkedList() {
    const list = {
        head: null,
        tail: null,
        size: 0
    };

    function append(data) {
        const newNode = createNode(data);
        if (!list.head) {
            list.head = newNode;
            list.tail = newNode;
        } else {
            newNode.prev = list.tail;
            list.tail.next = newNode;
            list.tail = newNode;
        }
        list.size++;
    }

    function prepend(data) {
        const newNode = createNode(data);
        if (!list.head) {
            list.head = newNode;
            list.tail = newNode;
        } else {
            newNode.next = list.head;
            list.head.prev = newNode;
            list.head = newNode;
        }
        list.size++;
    }

    function insertAt(data, index) {
        if (index < 0 || index > list.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            prepend(data);
        } else if (index === list.size) {
            append(data);
        } else {
            const newNode = createNode(data);
            let currentNode = list.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            newNode.next = currentNode.next;
            currentNode.next.prev = newNode;
            currentNode.next = newNode;
            list.size++;
        }
    }

    function removeAt(index) {
        if (index < 0 || index >= list.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            if (list.size === 1) {
                list.head = null;
                list.tail = null;
            } else {
                list.head = list.head.next;
                list.head.prev = null;
            }
        } else if (index === list.size - 1) {
            list.tail = list.tail.prev;
            list.tail.next = null;
        } else {
            let currentNode = list.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        list.size--;
    }

    function getSize() {
        return list.size;
    }

    function print() {
        let current = list.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    return {
        append,
        prepend,
        insertAt,
        removeAt,
        getSize,
        print
    };
}

// Example usage
const dll1 = createDoublyLinkedList();
dll1.append(1);
dll1.append(2);
dll1.append(3);
dll1.print();
console.log("Size:", dll1.getSize());


class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add a new node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert a new node at a specific index
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            this.prepend(data);
        } else if (index === this.size) {
            this.append(data);
        } else {
            const newNode = new Node(data);
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            newNode.next = currentNode.next;
            currentNode.next.prev = newNode;
            currentNode.next = newNode;
            this.size++;
        }
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.size - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        this.size--;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Print the elements of the list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.prepend(0);
dll.insertAt(2.5, 3);
dll.removeAt(2);
dll.print();
console.log("Size:", dll.getSize());
