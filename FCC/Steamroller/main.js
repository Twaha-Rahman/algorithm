function steamrollArray(arr) {

  let flatArr = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      const retrunVal = steamrollArray(element);
      flatArr = [...flatArr, ...retrunVal];
    } else {
      flatArr.push(element);
    }
  });
  return flatArr;
}
// [a, b]
console.log(steamrollArray([1, [2], [3, [[4]]]]));
