
/**
 * Creation.
 * Insertion (From head, from tail, in between ) .
 * Deletion (From head, from tail, in between ) .
 * Traversal.
 * Search.
 */


class CircularDoublyList {

    constructor(data) {
        this.head = {
            prev: null,
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    traverse(){
        let lead=this.head,pos=1;
        while(pos<=this.length){
            console.log(`Value at ${pos}-> ${lead.value}`);
            pos++;
            lead=lead.next;
        }
    }

    insertHead(data) {
        let newNode = {
            prev: null,
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.tail.next = this.head
        this.length++;
    }

    insertTail(data){
        let newNode = {
            prev: this.tail,
            value: data,
            next: this.head
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }

    insertBetween(data,position){
        let newNode = {
            prev: null,
            value: data,
            next: null,
        },pos=1 , lead=this.head;

        while(pos<position-1){
            pos++;
            lead=lead.next;
        }
        newNode.next=lead.next;
        newNode.prev=lead;
        lead.next.prev=newNode
        lead.next=newNode;
        this.length++;

    }

    deleteHead(){
        this.head.next.prev=null;
        this.head=this.head.next;
        this.tail.next=this.head;
        this.length--;
        // console.log("tail",this.tail);
        // console.log("head",this.head);

    }

    deleteTail(){
        this.tail.prev.next=this.head;
        // this.tail.prev=null;
        this.tail.next=null;
        this.tail=this.tail.prev;
        this.length--;
        // console.log("tail in delete tail", this.tail);
    }

    deleteAny(position){

        let pos=1,lead=this.head;
        while(pos<position-1){
            pos++;
            lead=lead.next;
        }
        let temp=lead.next;
        lead.next=lead.next.next;
        lead.next.next.prev=lead;
        temp.next= temp.prev=null;
        this.length--;
        console.log(`${temp.value} is deleted from ${position}`);

    }

    search(data){
        let pos=1,lead=this.head;
        while(data!=lead.value && pos<this.length){
            pos++;
            lead=lead.next;
        }
        console.log(`${data} is found at ${pos}`);
    }

}

let list = new CircularDoublyList(1)
list.insertHead(0);
list.insertTail(2);
list.insertTail(3);
list.insertTail(4);
list.insertTail(5);
// list.insertBetween(-1,3);
// list.deleteHead()
// list.deleteTail()
// list.traverse();
// list.deleteAny(3)
list.search(39);
list.traverse();