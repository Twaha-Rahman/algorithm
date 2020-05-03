function canConstruct(ransomNote, magazine) {
  let ransomChars = ransomNote.split('');
  let magazineChars = magazine.split('');

  let constructionErr = false;

  ransomChars.forEach((charInNote) => {
    if (constructionErr) return;

    if (magazineChars.includes(charInNote)) {
      const charIndex = magazineChars.indexOf(charInNote);
      magazineChars.splice(charIndex, 1);
    } else {
      constructionErr = true;
    }
  });

  console.log(!constructionErr);

  return !constructionErr;
}

canConstruct('a', 'b');
canConstruct('aa', 'ab');
canConstruct('aa', 'aab');
