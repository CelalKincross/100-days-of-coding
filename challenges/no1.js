// First, created a linked list using the freecodecamp tutorial
// linked list example from : https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

// Next I created a function that gets the length using geeksforgeeks tutorial
// get count function from : https://www.geeksforgeeks.org/javascript-program-for-finding-length-of-a-linked-list-iterative-and-recursive-approach/

// Formations' answer below

// Prompt
// Given a linked list, delete the middle node. If the list is even length, delete the node at the start of the second half of the list.
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

/// official Answer
// function deleteMiddleNode(head) {
//     // Many linked list problems that modify the list
//     // can be made simpler by temporarily inserting
//     // an extra node as the head.
//     let tempHead = new LLNode(Infinity, head);
  
  
//     // This solution will use a slow/fast pattern. In this
//     // case the fast will move twice as fast as the slow.
//     let slow = tempHead;
//     let fast = head?.next;
  
  
//     while (fast) {
//       // Slow moves ahead one.
//       slow = slow.next;
//       // Fast moves ahead two.
//       fast = fast.next?.next;
//     }
  
  
//     // Now that fast has moved off the end (now is null)
//     // slow is at the halfway point.
  
  
//     // update the slow pointer's next to skip the node
//     // after it.
//     slow.next = slow.next ? slow.next.next : null;
  
  
//     // Return the real head, not our temporary head.
//     return tempHead.next;
//   }


//Practice efficient answer
function delmiddelnode(head) {
    let tempHead = new ListNode(head);
    let slow = tempHead;
    let fast = head?.next;

    while (fast) {
        slow=slow.next;
        fast=fast.next?.next;
    }

    slow.next = slow.next ? slow.next.next : null;
    return tempHead.next;
}

deleteMiddleNode();
console.log(list.head)
