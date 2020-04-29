function convertHTML(str) {
  const entityAnd = '&amp;';
  const entityLesserThan = '&lt;';
  const entitygreaterThan = '&gt;';
  const entityDoubleQuote = '&quot;';
  const entitySingleQuote = '&apos;';

  const chars = str.split('');

  const newChars = [];

  for (let index = 0; index < chars.length; index++) {
    let alreadyProcessed = false;

    switch (chars[index]) {
      case '&':
        alreadyProcessed =true;
        newChars.push(entityAnd);
        break;
    
        case '>':
          alreadyProcessed =true;
          newChars.push(entitygreaterThan);
          break;

          case '<':
            alreadyProcessed =true;
            newChars.push(entityLesserThan);
        break;

        case '\'':
          alreadyProcessed =true;
          newChars.push(entitySingleQuote);
        break;

        case '"':
          alreadyProcessed =true;
          newChars.push(entityDoubleQuote);
        break;
    }

    if (!alreadyProcessed) {
      newChars.push(chars[index]);
    }
    
  }

  console.log(newChars.join(''));
  

  return newChars.join('');
}

convertHTML("Dolce & Gabbana");
