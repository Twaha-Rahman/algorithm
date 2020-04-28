function singleSymbolOne(number) {
  switch (number) {
    case 1:
      return 'I';
      break;
    case 2:
      return 'II';
      break;
    case 3:
      return 'III';
      break;
    case 4:
      return 'IV';
      break;
    case 5:
      return 'V';
      break;
    case 6:
      return 'VI';
      break;
    case 7:
      return 'VII';
      break;
    case 8:
      return 'VIII';
      break;
    case 9:
      return 'IX';
      break;
    case 10:
      return 'X';
      break;
  }
}

function singleSymbolTwo(number) {
  switch (number) {
    case 1:
      return 'X';
      break;
    case 2:
      return 'XX';
      break;
    case 3:
      return 'XXX';
      break;
    case 4:
      return 'XL';
      break;
    case 5:
      return 'L';
      break;
    case 6:
      return 'LX';
      break;
    case 7:
      return 'LXX';
      break;
    case 8:
      return 'LXXX';
      break;
    case 9:
      return 'XC';
      break;
    case 10:
      return 'C';
      break;
  }
}

function singleSymbolThree(number) {
  switch (number) {
    case 1:
      return 'C';
      break;
    case 2:
      return 'CC';
      break;
    case 3:
      return 'CCC';
      break;
    case 4:
      return 'CD';
      break;
    case 5:
      return 'D';
      break;
    case 6:
      return 'DC';
      break;
    case 7:
      return 'DCC';
      break;
    case 8:
      return 'DCCC';
      break;
    case 9:
      return 'CM';
      break;
    case 10:
      return 'M';
      break;
  }
}

function toRomanSymbol(numParts) {
  const numbersToDivideWith = [1_000, 100, 10, 1];

  const symbolsArr = [];
  let stitchedSymbol = '';
  numParts.forEach((part) => {
    //console.log(part);

    let alreadyProcessed = false;

    if (part % 1000 === 0) {
      alreadyProcessed = true;
      const thousands = part / 1000;
      stitchedSymbol += 'M'.repeat(thousands);
      //console.log('Thousands: ' + thousands);
    }

    if (part % 100 === 0) {
      if (!alreadyProcessed) {
        alreadyProcessed = true;
        const hundreds = part / 100;
        stitchedSymbol += singleSymbolThree(hundreds);
        //console.log('Hundreds: ' + hundreds);
      }
    }

    if (part % 10 === 0) {
      if (!alreadyProcessed) {
        alreadyProcessed = true;
        const tens = part / 10;
        stitchedSymbol += singleSymbolTwo(tens);
        //console.log('Tens: ' + tens);
      }
    }

    if (!alreadyProcessed) {
      //console.log('Number: ' + part);
      stitchedSymbol += singleSymbolOne(part);
    }
  });
  return stitchedSymbol;
}

function convertToRoman(num) {
  const numbersToDivideWith = [1_000, 100, 10, 1];

  let numToWorkWith = num;
  const parts = [];

  numbersToDivideWith.forEach((dividingNumber, index) => {
    const dividedNumber = numToWorkWith / dividingNumber;
    const dividedInteger = parseInt(dividedNumber);

    if (dividedInteger > 0) {
      numToWorkWith = numToWorkWith - dividedInteger * dividingNumber;
      parts.push(dividedInteger * dividingNumber);
    }
  });

  const romanNum = toRomanSymbol(parts);

  return romanNum;
}

console.log(
  convertToRoman(2),
  convertToRoman(4),
  convertToRoman(5),
  convertToRoman(9),
  convertToRoman(12),
  convertToRoman(16),
  convertToRoman(3999),
  convertToRoman(798)
);
