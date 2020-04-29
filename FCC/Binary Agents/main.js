function binaryAgent(str) {

  const chars = [];
  
  const binaryWords = str.split(' ');

  binaryWords.forEach((binaryWord) => {
    const numsInStrArr = binaryWord.split('').reverse();

    const chunkArr = [];

    numsInStrArr.forEach((numInStr, index) => {
      if (numInStr !== '0') {
        chunkArr.push(Math.pow(2, index));
      }
    });

    let sum = 0;

    chunkArr.forEach((num) => {
      sum += num;
    });

    chars.push(String.fromCharCode(sum));

  });

  const decodedStr = chars.join('');
  

  return decodedStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
