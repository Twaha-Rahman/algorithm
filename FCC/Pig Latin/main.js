function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const chars = str.split('');

  const firstConsonents = [];
  let breakSearch = false;
  let sliceIndex = 0;

  chars.forEach((char, index) => {
    if (breakSearch) {
      return;
    }

    if (!vowels.includes(char)) {
      firstConsonents.push(char);
      sliceIndex = index;
    } else {
      breakSearch = true;
    }
  });

  if (!breakSearch) {
    return str + 'ay';
  }

  if (firstConsonents.length > 0) {
    const slicedStr = str.slice(-1 * (str.length - (sliceIndex + 1)));
    const joinedConsonants = firstConsonents.join('');
    return slicedStr + joinedConsonants + 'ay';
  } else {
    return str + 'way';
  }
}

console.log(translatePigLatin('california'));
console.log(translatePigLatin('rhythm'));
