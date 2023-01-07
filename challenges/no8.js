// Prompt

// Given a binary tree, convert this to a doubly linked list in the order of the in-order traversal. This operation should be done in place, not creating any new data structure. You must re-use the node's left pointer as the pointer to the previous node in the list and the right pointer should be the next node in the list.


// At the end, return a pointer the first node in the list.

 /*
  * You may assume the node class is:
  * class Node {
  *   constructor(value, left = null, right = null) {
  *     this.value = value;
  *     this.left = left;
  *     this.right = right;
  *   }
  * }
  */
function tree2list(root) {
  // base case: if the root is null, return null
  if (root == null) {
    return null;
  }

  // process the left subtree
  let leftList = tree2list(root.left);

  // if the left subtree is not null, set the right pointer of the last
  // node in the list to the root and the left pointer of the root to the
  // last node
  if (leftList != null) {
    let leftTail = leftList;
    while (leftTail.right != null) {
      leftTail = leftTail.right;
    }
    leftTail.right = root;
    root.left = leftTail;
  }

  // update the last node to be the root
  let last = root;

  // process the right subtree
  let rightList = tree2list(root.right);

  // if the right subtree is not null, set the left pointer of the first
  // node in the list to the root and the right pointer of the root to the
  // first node
  if (rightList != null) {
    rightList.left = root;
    root.right = rightList;
  }

  // if the left subtree is not null, return the first node in the left
  // list, otherwise return the root
  return leftList != null ? leftList : root;
}
