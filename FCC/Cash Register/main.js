function totalMoney(cid) {
  let totalDollar = 0;

  cid.forEach((currency) => {
    totalDollar += currency[1];
  });

  return totalDollar;
}

// function convertToCurrencyArrWithType(cid) {
//   const modifiedArr = [];

//   cid.forEach((currency) => {
//     switch (currency[0]) {
//       case 'ONE HUNDRED':
//         modifiedArr.push([currency[0], currency[1], 1]);
//         break;

//       case 'TWENTY':
//         modifiedArr.push([currency[0], currency[1], 2]);
//         break;
//       case 'TEN':
//         modifiedArr.push([currency[0], currency[1], 3]);
//         break;
//       case 'FIVE':
//         modifiedArr.push([currency[0], currency[1], 4]);
//         break;
//       case 'ONE':
//         modifiedArr.push([currency[0], currency[1], 5]);
//         break;
//       case 'QUARTER':
//         modifiedArr.push([currency[0], currency[1], 6]);
//         break;
//       case 'DIME':
//         modifiedArr.push([currency[0], currency[1], 7]);
//         break;
//       case 'NICKEL':
//         modifiedArr.push([currency[0], currency[1], 8]);
//         break;
//       case 'PENNY':
//         modifiedArr.push([currency[0], currency[1], 9]);
//         break;
//     }
//   });

//   console.log(modifiedArr);

//   return modifiedArr;
// }

// function sortFromHighestToLowest(cid) {
//   // ONE HUNDRED > TWENTY > TEN > FIVE > ONE
//   // QUARTER > DIME > NICKEL > PENNY

//   const withType = convertToCurrencyArrWithType(cid);

//   cid.forEach((currency) => {});
// }

function isChangePossible(changeTarget, cid) {
  const pennyValue = 0.01;
  const nickelValue = 0.05;
  const dimeValue = 0.1;
  const quarterValue = 0.25;

  let totalDollar = 0;

  cid.forEach((currency) => {});

  return 5;
}

function checkCashRegister(price, cash, cid) {
  const change = cash - price;
  const availableMoney = totalMoney(cid);

  if (change > availableMoney) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  const changeStat = isChangePossible(change, cid);
  console.log(changeStat, change);
}

// console.log(
//   sortFromHighestToLowest([
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );

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
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ]),
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ]),
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
