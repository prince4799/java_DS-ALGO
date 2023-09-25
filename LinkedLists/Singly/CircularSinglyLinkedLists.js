
/**
 * Creation.
 * Insertion (From head, from tail, in between ) .
 * Deletion (From head, from tail, in between ) .
 * Traversal.
 * Search.
 */


class CircularList{
    constructor(nodeValue){
        this.head={
            value:nodeValue,
            next:null
        }
        this.tail=this.head;
        this.length=1;
    }

    traversal(){
        
        let pos=1;
        let lead=this.head;
        while(pos<=this.length){
            console.log(`value at ${pos} -> ${lead.value}`);
            pos++;
            lead=lead.next;
        }
       
    }

    insertAtHead(data){
        let newNode={
            value:data,
            next:null
        }
        newNode.next=this.head;
        this.head=newNode;
        this.tail.next=this.head
        this.length++;
        // console.log(" this.tail", this.tail);
    }

    insertAtTail(data){
        let newNode={
            value:data,
            next:this.head
        }
        /*
        =============Inefficient Method==============
        let lead=this.head ,pos=1;
        while(pos<this.length){
            pos++;
            lead=lead.next;
        }
        lead.next=newNode
        */
        this.tail.next = newNode;
       this.tail=newNode
        this.length++;
    }

    insertInBetween(data,position){
        let pos=1,
        newNode={
            value:data,
            next:null,
        },lead=this.head;

        while(pos<position-1){
            pos++;
            lead=lead.next;
        }
        newNode.next=lead.next;
        lead.next=newNode;
        this.length++;
    }

    deleteHead(){
        this.head=this.head.next;
        this.tail.next=this.head;
        this.length--;
    }

    deleteTail(){
        let pos=1,lead=this.head;
        while(pos<this.length-1){
            pos++;
            lead=lead.next;
        }
        lead.next.next=null;
        lead.next=this.head;
        this.tail=lead
        this.length--;
    }

    deleteInBetween(position){

     let pos=1,lead=this.head;
     while(pos<position-1){
        pos++;
        lead=lead.next;
     }   
     let temp=lead.next;
     console.warn(temp,"Deleted..");
     lead.next=lead.next.next;
     temp=null;
     this.length--;

    }

    search(value){
        let pos=1,lead=this.head;
        while(lead.value!=value && pos<=this.length){
            pos++;
            lead=lead.next;
        }
        console.warn(`${lead.value} found at ${pos} `);
    }
 
}
let list=new CircularList (1)
list.insertAtTail(0)
list.insertAtTail(2)
list.insertAtTail(3)
list.insertAtTail(4)
// list.insertAtTail(22)
// list.insertInBetween(33,2)
// list.deleteHead()
// list.deleteTail()
list.deleteInBetween(3)
list.search(0)
// list.traversal()
console.log("list",list);