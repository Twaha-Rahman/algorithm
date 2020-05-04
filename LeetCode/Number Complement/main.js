function findComplement(num) {
  const binaryOfNumArr = num.toString(2).split('');

  const flippedArr = [];

  binaryOfNumArr.forEach((char) => {
    if (char === '0') {
      flippedArr.push(1);
    } else {
      flippedArr.push(0);
    }
  });

  const flippedBinaryNum = flippedArr.join('');

  return parseInt(flippedBinaryNum, 2);
}

console.log(findComplement(5));
