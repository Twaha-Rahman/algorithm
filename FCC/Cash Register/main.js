function totalMoney(cid) {
  let totalDollar = 0;

  cid.forEach((currency) => {
    totalDollar += currency[1];
  });

  return totalDollar;
}

function isChangePossible(changeTarget, cid) {
  const currencyValue = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  let currencyAndThierValuesArr = [];

  const reversedArr = cid.reverse();

  const usedCurrencies = [];
  reversedArr.forEach(([type, value]) => {
    // loops for each currency
    const valuePerCurrency = currencyValue[type];
    const quantity = value / valuePerCurrency;

    let timesCurrency = 0;
    let currencyInValue = 0;

    for (let times = 1; times < quantity + 1; times++) {
      const multipliedValue = parseFloat((times * valuePerCurrency).toFixed(5));

      const subtractedValue = changeTarget - multipliedValue;

      if (subtractedValue >= 0) {
        // continue....store the amount and value
        timesCurrency = times;
        currencyInValue = multipliedValue;
      }

      //console.log(`${times} loop and value ${multipliedValue}`);
    }

    usedCurrencies.push([type, timesCurrency, currencyInValue]);

    //console.warn(`Currency amount ${timesCurrency}X`);

    //console.log(valuePerCurrency, quantity);
  });

  //console.log('New Info : ', usedCurrencies);

  // we'll try to get change target to zero

  let changeTargetContinuosDecrement = changeTarget;

  let returnArr = [];

  usedCurrencies.forEach(([type, times, value]) => {
    const valuePerCurrency = currencyValue[type];
    const quantity = value / valuePerCurrency;

    let count = 1;

    let nonNegativeValue = 0;

    while (count < times + 1) {
      // console.log(`Looped ${times}x for ${type}`);

      const multipliedValue = parseFloat((count * valuePerCurrency).toFixed(5));

      //changeTargetContinuosDecrement = changeTargetContinuosDecrement - multipliedValue;

      const valueAfterSubtraction = changeTargetContinuosDecrement - valuePerCurrency;
      //console.log(parseFloat(changeTargetContinuosDecrement.toFixed(5)), valuePerCurrency);

      if (valueAfterSubtraction >= 0) {
        nonNegativeValue = multipliedValue;
        changeTargetContinuosDecrement = parseFloat(changeTargetContinuosDecrement.toFixed(5)) - valuePerCurrency;
      }

      count++;
    }

    returnArr.push([type, nonNegativeValue]);
  });

  if (changeTargetContinuosDecrement !== 0) {
    return false;
  }

  // console.log(returnArr);

  // const toAdd = currencyValue[returnArr[returnArr.length - 1][0]];
  // returnArr[returnArr.length - 1][1] = returnArr[returnArr.length - 1][1] + toAdd;

  //console.log(returnArr);

  //check if all currencies are 0 or not
  let includlesValue = false;

  returnArr.forEach((pairArr) => {
    if (pairArr[1] !== 0) {
      includlesValue = true;
    }
  });

  if (includlesValue) {
    return returnArr;
  } else {
    return false;
  }
}

function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  const availableMoney = totalMoney(cid);

  if (change > availableMoney) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  const changeStat = isChangePossible(change, cid);

  if (changeStat) {
    console.log(changeStat);
    if (JSON.stringify(cid) === JSON.stringify(changeStat)) {
      return { status: 'CLOSED', change: changeStat.reverse() };
    }

    const toReturn = [];
    changeStat.forEach((pairArr) => {
      if (pairArr[1] !== 0) {
        toReturn.push(pairArr);
      }
    });

    return { status: 'OPEN', change: toReturn };
  } else {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ]),
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ]),

  // checkCashRegister(19.5, 20, [
  //   ['PENNY', 0.01],
  //   ['NICKEL', 0],
  //   ['DIME', 0],
  //   ['QUARTER', 0],
  //   ['ONE', 0],
  //   ['FIVE', 0],
  //   ['TEN', 0],
  //   ['TWENTY', 0],
  //   ['ONE HUNDRED', 0],
  // ]),
  // checkCashRegister(19.5, 20, [
  //   ['PENNY', 0.01],
  //   ['NICKEL', 0],
  //   ['DIME', 0],
  //   ['QUARTER', 0],
  //   ['ONE', 1],
  //   ['FIVE', 0],
  //   ['TEN', 0],
  //   ['TWENTY', 0],
  //   ['ONE HUNDRED', 0],
  // ]),
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
