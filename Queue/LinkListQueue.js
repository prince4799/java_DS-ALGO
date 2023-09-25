class Queue {

    constructor(data) {
        this.head = {
            prev: null,
            value: data,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    enqueue(data) {
        let newNode = {
            prev: this.tail,
            value: data,
            next: null,
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    dequeue(data) {
        if(this.isEmpty()){
            console.log(`The queue is already empty`);
            return;
        }
        if(this.head===this.tail){
            this.head=null;
            this.length--;
            return;
        }
        let temp = this.head;
        this.head.next.prev = null;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

    }

    peek(){
        if(this.isEmpty()){
            console.log(`The queue is empty`);
            return;
        }
        console.log(`The first element is ${this.head.value}`);
        return;
    }

    size(){
        if(this.isEmpty()){
            console.log(`The queue is empty`);
            return;
        }
        console.log(`The size of the queue is ${this.length}`);
        return;
    }

    isEmpty(){
        return this.head===null;

    }

//====== It is not a part of Queue operation it is just made to check the valdity of the code ====//

    traverse(){
        if(this.isEmpty()){
            console.log(`The queue is empty`);
            return;
        }
        let temp=this.head;
        let i=1;
        while(i<=this.length){
            console.log(`Value at ${i++} is ${temp.value} `);
            temp=temp.next;
        }
        
    }
}

const queue= new Queue(5)

queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
// queue.dequeue()
queue.dequeue()

queue.isEmpty()

queue.traverse()
queue.peek()
