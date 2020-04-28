function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  const sourceKeys = Object.keys(source);

  collection.forEach((collectionObj) => {
    const collectionObjKeys = Object.keys(collectionObj);

    let match = true;
    sourceKeys.forEach((sourceKey) => {
      if (source[sourceKey] !== collectionObj[sourceKey]) {
        match = false;
      }
    });

    if (match) {
      arr.push(collectionObj);
    }
  });

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 }));
