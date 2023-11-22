class Node{
    int data;
    Node next;
    Node(int data){
        this.data=data;
        this.next=null;
    }
}
class LL{
    static Node head;
    LL(){
        head=null;
    }
    static void addfirst(int data){
        Node newnode=new Node(data);
        if (head==null){
            head=newnode;
            return;
        }
        newnode.next=head;
        head=newnode;
    }  
     static void display(){
       Node curr=head;
       while(curr!=null){
        System.out.println(curr.data);
        curr=curr.next;
       }
     }   
}

class Queue{
    Queue(){
    LL que=new LL();
    }
    static void push(int data){
        LL.addfirst(data);
    }
    static int pop(){
        if(head==null){
            return head.data;
        }
        
    }

    
}

public class linkedlistt {
    public static void main(String[] args) {
        LL list=new LL();
        LL.addfirst(12);
        LL.addfirst(20);
        LL.display();
    }
    
}
