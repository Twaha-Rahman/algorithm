function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

//T = SQRT [(4 • pi2 • R3) / (G*Mcentral)]

const returnArr = [];
arr.forEach(({ name, avgAlt }) => {
  const distance = earthRadius + avgAlt;

  const piSqr = Math.pow(Math.PI, 2);

  const distanceCube = Math.pow(distance, 3);

  const innerCalc = (4 * piSqr * distanceCube) / GM;

  const orbitalPeriod = Number(Math.sqrt(innerCalc).toFixed(0));
  
  returnArr.push({ name, orbitalPeriod });

});

console.log(...returnArr);


  return returnArr;
}


orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])