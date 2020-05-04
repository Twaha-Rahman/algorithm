function plusMinus(arr) {
  let negativeNums = 0;
  let positiveNums = 0;
  let zeros = 0;

  arr.forEach((num) => {
    if (num === 0) {
      zeros++;
    }

    if (num > 0) {
      positiveNums++;
    }

    if (num < 0) {
      negativeNums++;
    }
  });

  let positiveNumsFraction = (positiveNums / arr.length).toFixed(6);
  let negativeNumsFraction = (negativeNums / arr.length).toFixed(6);
  let zerosFraction = (zeros / arr.length).toFixed(6);

  const formattedStr = `${positiveNumsFraction}\n${negativeNumsFraction}\n${zerosFraction}\n`;

  return formattedStr;
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
