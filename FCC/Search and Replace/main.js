function myReplace(str, before, after) {
  const words = str.split(' ');
  const newWords = [];
  words.forEach((word) => {
    if (word === before) {
      const firstCharOfWord = word[0];
      if (/[A-Z]/g.test(firstCharOfWord)) {
        const startsWithCapital = after.replace(after[0], after[0].toUpperCase());
        newWords.push(startsWithCapital);
      } else {
        newWords.push(after);
      }
    } else {
      newWords.push(word);
    }
  });
  return newWords.join(' ');
}

console.log(myReplace('Let us get back to more Coding', 'Coding', 'algorithms'));
