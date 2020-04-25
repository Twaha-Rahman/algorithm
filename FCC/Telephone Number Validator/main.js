function telephoneCheck(number) {
  const characters = number.split('');

  let numberCount = 0;
  let includesNotAllowedChar = false;
  let encounteredBracketStart = false;
  let charsAfterBracketStart = 0;

  characters.forEach((element) => {
    if (encounteredBracketStart) {
      charsAfterBracketStart += 1;
    }

    if (element === '(') {
      encounteredBracketStart = true;
    }

    if (element === ')') {
      if (!encounteredBracketStart) {
        console.log('i came here...');

        includesNotAllowedChar = true;
      } else {
        console.log(charsAfterBracketStart);
        if (charsAfterBracketStart !== 4) {
          includesNotAllowedChar = true;
        }
      }
    }

    let convertedStr = Number(element);
    if (element === ' ') {
      convertedStr = NaN;
    }

    if (!isNaN(convertedStr)) {
      numberCount += 1;
    } else {
      if (element !== ' ' && element !== '(' && element !== ')' && element !== '-') {
        includesNotAllowedChar = true;
      }
    }
  });

  let isTelephoneNumber = false;

  if (numberCount === 10) {
    isTelephoneNumber = true;
  }

  if (numberCount === 11) {
    if (characters[0] === '1') {
      isTelephoneNumber = true;
    }
  }

  if (includesNotAllowedChar) {
    isTelephoneNumber = false;
  }

  let bracketStartCount = (number.match(/\(/g) || []).length;
  let bracketEndCount = (number.match(/\)/g) || []).length;

  if (bracketStartCount !== bracketEndCount) {
    isTelephoneNumber = false;
  }

  return isTelephoneNumber;
}

// 10 digits long
// may start with 1 (11 digits long)

console.log(
  telephoneCheck('555-555-5555'),
  telephoneCheck('(555)555-5555'),
  telephoneCheck('1(555) 555-5555'),
  telephoneCheck('(555) 555-5555'),
  telephoneCheck('555 555 5555'),
  telephoneCheck('1 555 555 5555'),
  telephoneCheck('5555555555'),
  telephoneCheck('1 (555) 555-5555'),
  telephoneCheck('1 555 555 5555'),
  telephoneCheck('1 555)555-5555'),
  telephoneCheck('(6054756961)'),
  telephoneCheck('555)-555-5555'),
  telephoneCheck('(555-555-5555'),
  telephoneCheck('(555)5(55?)-5555')
);
