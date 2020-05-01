function pairElement(str) {

  const resArr = [];

  const chars = str.split('');

  chars.forEach((char) => {
    switch (char) {
      case 'A':
        resArr.push(['A', 'T']);
        break;
        case 'T':
          resArr.push(['T', 'A']);
          break;
          case 'C':
            resArr.push(['C', 'G']);
        break;
        case 'G':
          resArr.push(['G', 'C']);
        break;
    }
  });

  return resArr;
}

pairElement("GCG");
