// First, created a linked list using the freecodecamp tutorial
// linked list example from : https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

// Next I created a function that gets the length using geeksforgeeks tutorial
// get count function from : https://www.geeksforgeeks.org/javascript-program-for-finding-length-of-a-linked-list-iterative-and-recursive-approach/

/*
  * You may assume the node class is:
  * class LLNode {
  *   constructor(value, next = null) {
  *     this.value = value;
  *     this.next = next;
  *   }
  * }
  */

// creates nodes
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// creates linked lists
class LinkedList {
    constructor(head=null) {
        this.head = head
    }
}


// create two nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);

// link them with next
node1.next = node2

// create another node
let node3 = new ListNode(9);

// link with next
node2.next = node3
let list = new LinkedList(node1);

// check result
console.log(list.head);

// create a function to get the length of the linked list
function getCount() {
    let temp = list.head;
    let count = 0;
    while (temp!=null) {
        count++;
        temp = temp.next;
    }
    return count;
}

// check function
console.log({"count: ": getCount()})


function deleteMiddleNode(head) {
    /* your code here */
    // get the middle index using the getCount() function created earlier
    let middleIndex = Math.ceil(getCount()/2);
    console.log({"middle index: ":middleIndex})

    // get the middle noode
    let middleNode = list.head;
    let count = 0;
    if (middleNode) {
        while (count<middleIndex) {
            count++;
            middleNode = middleNode.next;
        }
    }
    // delete the value for the middle node
    middleNode.data = null;

  }

deleteMiddleNode();
console.log(list.head)