
/**
 * Creation.
 * Insertion (From head, from tail, in between ) .
 * Deletion (From head, from tail, in between ) .
 * Traversal.
 * Search.
 */


class List {
    constructor(nodeValue) {
        this.head = {
            value: nodeValue,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    traverseNode() {
        if (this.length < 1) {
            console.log("List is empty.");
            return;
        }

        let currentNode = this.head;
        let number = 1;
        while (currentNode) {
            console.log(`value of node ${number++}-> ${currentNode.value}`);
            currentNode = currentNode.next
        }
    }

    insertAtTail(nodeValue) {

        if (this.length < 1) {
            this.insertAtHead(nodeValue);
            return;
        }

        let newNode = {
            value: nodeValue,
            next: null
        }
        this.tail.next = newNode,
            this.tail = newNode
        this.length++;
    }

    insertAtHead(data) {
        if (!this.head) {
            let newNode = {
                value: data,
                next: null
            }
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        let newNode = {
            value: data,
            next: this.head
        }
        this.head = newNode
        this.length++;
    }

    insertInBetween(data, position) {
        let newNode = {
            value: data,
            next: null
        }
        let invalid = this.invalid(position)
        if (invalid) {
            console.warn("Please enter valid position.");
            return
        }
        if (position == 1) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return
        }
        let pos = 1;
        let lead = this.head;
        while (pos < position - 1) {
            pos++;
            lead = lead.next
        }
        newNode.next = lead.next
        lead.next = newNode
        this.length++;
        console.log("newNode", newNode,);
        console.log("lead", lead,);
    }

    deleteInBetween(position) {
        let pos = 1;
        let lead = this.head;
        let invalid = this.invalid(position)
        if (invalid) {
            console.warn("Please enter valid position.");
            return
        }

        if (position == 1) {
            this.deleteFromHead();
            return
        }

        if (this.length < 1) {
            console.log(`List is already empty.`);
            return;
        }

        while (pos < position - 1) {
            pos++;
            lead = lead.next
        }
        this.length--;
        let temp = lead;
        lead.next = lead.next.next;
        console.log(`${temp.value} is deleted from ${position}.`);
    }

    deleteFromTail() {
        let currentNode = this.head;
        let invalid = this.invalid(position)
        if (invalid) {
            console.warn("Please enter valid position.");
            return
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        let currPos = 1
        while (currPos < this.length) {
            currPos++;
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
    }

    deleteFromHead() {

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        if (this.length < 1) {
            console.log("The list is already empty");
            return
        }

        this.length--;
        let currNode = this.head;
        this.head = currNode.next
        console.log(`${currNode.value} is deleted `);
        currNode = null
    }

    updateHead(data) {
        if (this.length < 1) {
            console.log(`List is empty unable to update the list.`);
            return;
        }
        this.head.value = data;
        return;
    }

    updateTail(data) {
        if (this.length < 1) {
            console.log(`List is empty unable to update the list.`);
            return;
        }
        this.tail.value = data;
        console.log(`Sucessfully updated the element at end.`);
    }

    updataInBetween(data, position) {

        let pos = 1, lead = this.head;
        let invalid = this.invalid(position)
        if (invalid) {
            console.warn("Please enter valid position.");
            return
        }
        if(this.length==1){
            this.updateHead(data);
            return;
        }

        while (pos < position) {
            pos++;
            lead = lead.next;
        }
        lead.value = data
    }

    invalid(position) {
        if (position < 1 || position > this.length)
            return true
    }

    search(value) {
        if(this.length<1){
            console.log(`List is empty.`);
            return;
        }
        if(this.length==1 ){
            if(this.head.value==value)
            console.log(`${value} is found at 1`);
            return;
        }

        let pos = 1, lead = this.head;

        while (lead.value != value && pos <= this.length) {
            pos++;
            lead = lead.next;
        }
        console.warn(`${lead.value} found at ${pos} `);
    }

}
let list = new List(1)
list.insertAtHead(2)
list.insertAtHead(3)
list.insertAtHead(4)
list.insertAtHead(5)
list.insertAtHead(6)
// list.insertAtHead(99)
// list.insertInBetween(33,10)
// list.deleteFromTail()
// list.deleteFromHead()
// list.deleteInBetween(4)
// list.deleteInBetween(4)
// list.deleteInBetween(4)
// list.search(4)

// list.updateHead(44)
// list.updateTail(99)
// list.updataInBetween(5,2)
// console.log("length",list);
// list.traverseNode()


let list2 = new List(0)
list2.deleteFromHead()
list2.insertAtHead(1);
list2.traverseNode()
console.log("list2", list2);