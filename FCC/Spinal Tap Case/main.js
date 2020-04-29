function spinalCase(str) {
  const chars = str.replace(/ /g, '-').replace(/_/g, '-').split('');

  const capitalIndex = [];

  chars.forEach((char, index) => {
    if (index !== 0) {
      const capitalLetter = char.toUpperCase();
      const regex = /[\W_]+/g;
      if (char === capitalLetter && (!regex.test(char))) {
        capitalIndex.push(index);
      }
    }
  });

  let shiftedBy = 0;

  console.log(chars.join(''));
  

  capitalIndex.forEach((index) => {

    const currentChar = chars[index - shiftedBy];
    const prevChar = chars[index + shiftedBy - 1];

    console.log(prevChar);
    

    if (prevChar !== '-') {
      chars.splice(index + shiftedBy, 0, '-');
      shiftedBy++;
    }
  });

  return chars.join('').toLowerCase();
}

console.log(spinalCase('thizIsMpinalTap'));
