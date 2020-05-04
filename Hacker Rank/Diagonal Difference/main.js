function diagonalDifference(arr) {
  // Write your code here

  let leftToRight = 0;
  let rightToLeft = 0;

  for (let index = 0; index < arr.length; index++) {
    leftToRight += arr[index][index];
    rightToLeft += arr[index][arr.length - index - 1];
  }

  console.log([leftToRight, rightToLeft]);

  return Math.abs(leftToRight - rightToLeft);
}

console.log(
  diagonalDifference([
    [11, 2, 4, 10],
    [4, 5, 6, 10],
    [10, 8, -12, 10],
    [10, 8, -12, 10],
  ])
);
