function merge(arr1, arr2) {
 
  let results = [];
  let i = 0; 
  let j = 0; 

  while (i < arr1.length && j < arr2.length) { // Compare the elements from both arrays

    if (arr2[j] > arr1[i]) { // If the element in arr1 is smaller, add it to the results

      results.push(arr1[i]);

      i++;
    } else { // If the element in arr2 is smaller or equal, add it to the results
      results.push(arr2[j]);
      j++;
    }
  }

    while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

    while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
// Add all remaining elements from arr1 and arr2 to the results


  return results;

}

function mergeSort(arr) {
  // Base case: If the array has 0 or 1 elements, it's already sorted.
  
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array.

  const mid = Math.floor(arr.length / 2);

  // Recursively split the left and right halves of the array.

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted left and right halves and return the result.
  
  return merge(left, right);
}

module.exports = { merge, mergeSort};