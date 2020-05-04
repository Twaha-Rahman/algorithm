function duplicateZeros(arr) {
  const orginalLength = arr.length;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 0) {
      arr.splice(index + 1, 0, 0);
      index++;
    }
  }

  arr = arr.slice(0, orginalLength);

  // we'll be seeing the value in here
  console.log(arr);
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
