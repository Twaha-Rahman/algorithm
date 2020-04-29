function uniteUnique(arr) {
  const allArgs = [...arguments];
  
  let uniqArr = [];
  allArgs.forEach((nestedArr) => {
    uniqArr = [...uniqArr, ...nestedArr];
  });
  uniqArr = [...new Set(uniqArr)];
  
  return uniqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
