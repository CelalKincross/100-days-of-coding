# 100-days-of-coding
> I am starting a 100-day coding challenge. The first 21 days will be from coding challenges from [_formation_](https://formation.dev/)
> The source of the coding challenges for the other 79 days will be updated as I go. 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Coding Questions](#coding-questions)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

## General Information
- My programming skills need some fine tuning, so, the overall goal is to improve my general programming skills in a short period of time.
- Result 100 days later: To be continued...

## Technologies Used
- I will use Javascript primarily. I may add some Python. 

## Coding Questions
Skills to work on:
- Searches
- Recursion
- General problem solving skills

1. Given a linked list, delete the middle node. If the list is even length, delete the node at the start of the second half of the list.
- Use Fast/Slow pattern to find the middle node 

`  while (fast) {
    // Slow moves ahead one.
    slow = slow.next;
    // Fast moves ahead two.
    fast = fast.next?.next;
  }`

- in this case, when the fast hits null, slow will equal the middle node. 
- you can also create a new temporary head to make things easier, and will require slow to iterate one position further at the end. 

2. Prompt
Given a 2D rectangular matrix, return all of the values in a single, linear array in spiral order. Start at (0, 0) and first include everything in the first row. Then down the last column, back the last row (in reverse), and finally up the first column before turning right and continuing into the interior of the matrix.

- first attempt was the naive way.
- answer use loops in a switch statment with directions, row start and end variables along with column start and end varialbes. 

3. Prompt
Given a linked list, reverse groups of k nodes. These groups will remain in order themselves. For example, if we perform this operation with k=2 on the following list:

1 -> 2 -> 3 -> 4-> 5

First review how to reverse a linked list that look at the solution.

4. Prompt
A Toeplitz Matrix is one where the values on every diagonal are the same: Given a 2d matrix (multidimensional array), return true if the input is a Toeplitz matrix and false otherwise.

 

Example of a valid Toeplitz matrix:

1 2 3 4
5 1 2 3
6 5 1 2
7 6 5 1

- use row-major traversal, save value 
- start checking at row 1 and check up to the left matrix value is same as saved value

5. Prompt

Given a rectangular 2D array of integers, return true if all rows and all columns are monotonically increasing. This means that every successive value along all rows and columns must be AT LEAST as large as what came before.

 

Example:

[[0, 0, 0, 1],
 [1, 1, 1, 2],
 [2, 3, 4, 5]]

Returns true but this next one returns false.

[[0, 0, 0, 1],
 [1, 1, 3, 2],
 [2, 3, 4, 5]] 

function isMatrixMonotonic(matrix) {
 /* your code here */
}

- row-major traversal 
- save current value
- ROWS: if statement that starts check at rows starting and column 1
- check the prev values, if greater than current value return false
- COLUMNS: if statment that checks columns starting at row one
- check the precdeing col values, if greater than current value return false

6. Prompt

Given a matrix that is monotonically increasing along all rows and columns, as well as a value, k, return true if the value exists in the matrix and false otherwise.

[]function findInMonotonic(matrix, k) {
  /* your code here */
}

- Strategy: Use Binary Search-start in the middle row, if in the preceding row is lower and the value in the next row is greater, check current row. else row++? 
 - Binary search was a terrible idea :bomb:
 - Better strategy is to start a corner where one branch ends as the highest value and also begin as the lowest value or vice versa. For instance, bottom left. 
 - while row is greater than 0 and column less than the length of rows, check if k is greater than value.
 - if so check the next column (col are increasing at bottom left)
 - else check previous row. 

 7. Prompt

Given a string, return true if the letters can be re-arranged to make a palindrome using every letter. Otherwise, return false.

function isPalindromeAnagram(word) {
  /* your code here */
}

- the letter frequency of a palindrome is even except for the middle letter. Create a dictionary and do a count then return the count of the odd number of letter count. 

8. Prompt

Given a binary tree, convert this to a doubly linked list in the order of the in-order traversal. This operation should be done in place, not creating any new data structure. You must re-use the node's left pointer as the pointer to the previous node in the list and the right pointer should be the next node in the list.


At the end, return a pointer the first node in the list.

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
  /* your code here */
}


To convert a binary tree to a doubly linked list in the order of the in-order traversal, you can use a recursive approach that processes the left subtree, current node, and right subtree in that order.

Here is a high-level outline of the algorithm:

If the root is null, return null.
Process the left subtree by calling the function recursively on the left child of the root.
If the left subtree is not null, set the right pointer of the last node in the list to the root and the left pointer of the root to the last node.
Update the last node to be the root.
Process the right subtree by calling the function recursively on the right child of the root.
If the right subtree is not null, set the left pointer of the first node in the list to the root and the right pointer of the root to the first node.
Return the first node in the list.


9. Prompt

Implement binary search on an array. Return the index of the value if found and -1 otherwise.

function binarySearch(data, k) {
  /* your code here */
}


## Setup
All you need is VSCODE.

## Project Status
Project is: _in progress_ 
<!-- / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->

## Room for Improvement

Room for improvement:
- Linked lists
- more to follow

To do:

- 91 more days

9.
## Acknowledgements
- This project was inspired by formation 21-day challenge, [formation](https://formation.dev/).
- Many thanks to... to follow...


## Contact
Created by [@Lee](https://celalkincross.github.io/) - feel free to contact me!
