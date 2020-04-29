function dropElements(arr, func) {

  const newArr = [];

  let stat = false;

  arr.forEach(num => {
    if (func(num)) {
      stat = true;
    }
    if (stat) {
      newArr.push(num);
    }
  });
  
  return newArr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;})
