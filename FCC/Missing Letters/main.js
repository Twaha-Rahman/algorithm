function fearNotLetter(str) {
  const chars = str.split('');

  let missingLetter = '';

  chars.forEach((char, index) => {
    if ((index + 1) === chars.length) {
      return;
    }
    const thisCharCode = char.charCodeAt(0);
    const nextCharCode = chars[index + 1].charCodeAt(0);
    
    if ((thisCharCode + 1) !== nextCharCode) {
      missingLetter = String.fromCharCode(thisCharCode + 1);
    }
    
  });

  console.log(missingLetter);

  if (missingLetter === '') {
    return;
  }
  
  return missingLetter;
}

fearNotLetter("abce");
