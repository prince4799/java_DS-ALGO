
/**
 * Creation.
 * Insertion (From head, from tail, in between ) .
 * Deletion (From head, from tail, in between ) .
 * Traversal.
 * Search.
 */


class DoublyList{
    constructor(data){
        this.head={
            prev:null,
            value:data,
            next:null,
        };
        this.tail = this.head;
        this.length = 1;
        
    }
    traverse(){
        let pos=1,lead=this.head;
        while(pos<=this.length){
            console.log(`Value at ${pos} -> ${lead.value}`);
            lead=lead.next;
            pos++;
        }
    }

    insertHead(data){
        let newNode={
            prev:null,
            value:data,
            next:this.head, 
        }

    if (this.head !== null) {
        this.head.prev = newNode; // Update the previous pointer of the old head
    }
        this.head=newNode;
        this.length++;
    }

    insertTail(data){
        let newNode={
            prev:this.tail,
            value:data,
            next:null, 
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }

    insertInBetween(data,position){
        let pos=1,lead=this.head,
        newNode={
            prev:null,
            value:data,
            next:null, 
        };
        while(pos<position-1){
            pos++;
            lead=lead.next;
        }
        newNode.prev=lead;
        newNode.next=lead.next;
        lead.next=newNode;
        this.length++;

    }

    deleteHead(){
        let lead=this.head;
        this.head=lead.next;
        lead.prev=null;
        this.length--;

    }

    deleteTail(){
        let lead=this.head , pos=1;
        while(pos<this.length){
            lead=lead.next;
            pos++;

        }
        this.tail=null;
        this.tail=lead
        lead.next=null;
        this.length--;
    }

    deleteInBetween(position){

        let pos=1,lead=this.head;
        while(pos<position-1){
            pos++;
            lead=lead.next;
        }
        lead.next.prev=lead;
        lead.next=lead.next.next
        this.length--;
    }

    search(data){
        let pos=1,lead=this.head;
        while(data!=lead.value && pos<=this.length){
            pos++;
            lead=lead.next;
        }
        console.log(`${data} found at ${pos}`);
    }

    
}

let list= new DoublyList(0);
list.insertTail(1);
list.insertTail(2);
list.insertTail(3);
list.insertHead(-1);
list.insertInBetween(5,2);
list.deleteInBetween(5);
list.deleteHead();
list.deleteTail();
list.search(5);
list.traverse();

