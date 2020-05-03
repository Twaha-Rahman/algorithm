function reverseCheck(word) {
  const convertedWord = word.replace(' ', '').toLowerCase();
  const reverseWord = convertedWord.split('').reverse().join('');

  if (convertedWord === reverseWord) {
    return true;
  } else {
    return false;
  }
}

console.log(reverseCheck('race car'));