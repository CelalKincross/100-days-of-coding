
// Prompt

// Implement binary search on an array. Return the index of the value if found and -1 otherwise.
function binarySearchIterative(data, k) {

  // find start and end of array
  let left = 0;
  let right = data.length -1;

  // operate only if the right index is greater than or the same as the left
  while (left <= right) {
    let mid = Math.floor((left+right)/2);
    // check current value
    if (data[mid]=== k) return true;
    // change start and end indexes depending on the if 
    // k is greater or less than the middle value 
    if (data[mid]>k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}


// recursive solution
function binarySearchRecursive(data, k, left, right) {
  // base case: if the left pointer is greater than the right pointer,
  // the value is not in the array
  if (left > right) {
    return -1;
  }

  // calculate the midpoint
  let mid = Math.floor((left + right) / 2);

  // if the value at the midpoint is the target value, return the index
  // of the midpoint
  if (data[mid] === k) {
    return mid;
  }

  // if the target value is less than the value at the midpoint, search
  // the left half of the array
  if (k < data[mid]) {
    return binarySearchRecursive(data, k, left, mid - 1);
  }

  // otherwise, search the right half of the array
  return binarySearchRecursive(data, k, mid + 1, right);
}

console.log(binarySearchIterative([1,3,5,5,6,7], 10))