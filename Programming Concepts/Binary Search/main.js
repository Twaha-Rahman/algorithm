function binarySearch(arr, elementToFind) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    console.log(left, right, arr[middle]);

    if (arr[middle] === elementToFind) {
      return arr[middle];
    }
    if (elementToFind > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
