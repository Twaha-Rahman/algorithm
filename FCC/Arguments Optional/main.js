function addTogether(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }

  if (typeof num1 !== 'number' || typeof num1 !== 'number') {
    return undefined;
  }

  if (!num2) {
    const customFunc = (laterNum) => {
      return addTogether(num1, laterNum);
    };
    return customFunc;
  }
}

addTogether(2, 3);
