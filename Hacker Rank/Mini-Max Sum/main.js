function miniMaxSum(arr) {
  let minimumArr = arr
    .sort()
    .slice(0, 4)
    .reduce((sum, val) => (sum += val));
  let copy = JSON.parse(JSON.stringify(arr));
  let maximumArr = copy
    .sort()
    .reverse()
    .slice(0, 4)
    .reduce((sum, val) => (sum += val));
  console.log(minimumArr, maximumArr);
}

console.log(miniMaxSum([-4, 3, -9, 0, 4, 1]));
