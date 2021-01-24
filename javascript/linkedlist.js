class Node{
    constructor(data, next=null, prev=null){
        this.data=data
        this.next=next
        this.prev=prev
    }
}

class Linkedlist{
    constructor(){
        this.head=null
    }
    
    len(){
        let count=0
        let trav=this.head
        while(trav!==null){
            count++
            trav=trav.next
        }
        return count
    }

    show(){
        let list=[]
        let trav= this.head
        if(trav===null){
            console.log('null')
        }
        else{
            while(trav!== null){
                if(trav.data){
                    list.push(trav.data)
                }
                trav=trav.next
            }
            console.log(list)
        }
    }
    
    insert(data){
        let node = new Node(data)
        if(this.head===null){
            this.head=node
        }
        else{
            let trav=this.head
            while(trav.next!==null){
                trav=trav.next
            }
            trav.next=node
        }
    }

    insertFirst(data){
        let node = new Node(data)
        if(this.head===null){
            this.head=node
        }
        else{
            let temp = this.head
            this.head= node
            this.head.next=temp
        }
    }

    insertAt(data, index){
        let node = new Node(data)
        if(index===0){
            this.insertFirst(data)
        }
        else if(index>this.len()){
            console.log("Out of Bounds error")
            return false
        }
        else{
            let temp;
            let count=1;
            let trav= this.head
            while(count<=index-1){
                count++
                trav = trav.next
            }
            temp = trav.next
            trav.next= node
            trav.next.next=temp
        }
    }
    
// yet to implement
    remove(data){
        /**
         * yet to implement
         */
        if(this.head===null){
            return
        }
        else{
            let trav = this.head
            while(trav!==null){
                if(trav.next){

                }
            }
        }
    }
}

list = new Linkedlist()
list.insert(2)
list.insert(3)
list.insert(4)
list.insertFirst(55)
list.insertFirst(56)
list.insert(22)
list.show()
console.log(list.len())
list.insertAt(1,0)
list.show()
list.remove(3)
list.show()