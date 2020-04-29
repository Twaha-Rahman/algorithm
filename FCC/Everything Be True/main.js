function checkIfFalsy(arg) {
  let isFalsy = false;

  switch (arg) {
    case false:
      isFalsy = true;
      break;
      case 0:
      isFalsy = true;
      break;
      case -0:
      isFalsy = true;
      break;
      case 0n:
      isFalsy = true;
      break;
      case '':
      isFalsy = true;
      break;
  }

  if (Number.isNaN(arg)) {
    isFalsy = true;
  }

  if (!arg) {
    isFalsy = true;
  }

  return isFalsy;
}

function truthCheck(collection, pre) {

  let istruthy = true;

  collection.forEach((obj) => {
   const valueFromKey = obj[pre];
   if (checkIfFalsy(valueFromKey)) {
     istruthy = false;
     return;
   } 
  });
  
  return istruthy;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
