function sumAll(range) {
  let upperBound = 0;
  let lowerBound = 0;

  if (range[0] > range[1]) {
    upperBound = range[0];
    lowerBound = range[1];
  } else {
    upperBound = range[1];
    lowerBound = range[0];
  }

  let sum = 0;

  while (lowerBound < upperBound + 1) {
    sum += lowerBound;
    lowerBound++;
  }

  return sum;
}

console.log(sumAll([5, 10]));
