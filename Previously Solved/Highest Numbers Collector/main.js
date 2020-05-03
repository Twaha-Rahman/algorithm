function highestNumberCollector(multiDimensionalArray) {
  const highestNumbersFromArrays = [];

  multiDimensionalArray.forEach((arr) => {
    let highestNumber = 0;
    arr.forEach((num) => {
      if (num > highestNumber) {
        highestNumber = num;
      }
    });
    highestNumbersFromArrays.push(highestNumber);
  });

  return highestNumbersFromArrays;
}

console.log(highestNumberCollector([[1, 5, 2], [2, 9, 0, 11]]));
