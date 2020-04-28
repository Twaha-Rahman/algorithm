function diffArray(arr1, arr2) {
  let longerArr = [];
  let shorterArr = [];

  if (arr1.length > arr2.length) {
    longerArr = arr1;
    shorterArr = arr2;
  } else {
    longerArr = arr2;
    shorterArr = arr1;
  }

  const filteredArr1 = longerArr.filter((element) => {
    if (!shorterArr.includes(element)) {
      return true;
    }
  });

  const filteredArr2 = shorterArr.filter((element) => {
    if (!longerArr.includes(element)) {
      return true;
    }
  });

  const diff = [...filteredArr1, ...filteredArr2];

  return diff;
}

console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
