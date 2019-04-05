'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let rootIndex = Math.floor(array.length / 2);
  let leftSide = array.slice(0, rootIndex);
  let rightSide = array.slice(rootIndex);

  if (array[rootIndex] === target) {
    return true;
  } else if (target < array[rootIndex]) {
    if (leftSide.length > 1) {
      return binarySearch(leftSide, target);
    }
  } else {
    if (rightSide.length > 1) {
      return binarySearch(rightSide, target);
    }
  }
  if (leftSide[0] === target || rightSide[0] === target) {
    return true;
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
