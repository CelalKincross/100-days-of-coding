function mergeSort(data) {
    // base case: if the array has fewer than 2 elements, return the array
    if (data.length < 2) {
      return data;
    }
  
    // split the array into two halves
    let mid = Math.floor(data.length / 2);
    let left = data.slice(0, mid);
    let right = data.slice(mid);
  
    // recursively sort the left and right halves
    left = mergeSort(left);
    right = mergeSort(right);
  
    // merge the sorted left and right halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }
  