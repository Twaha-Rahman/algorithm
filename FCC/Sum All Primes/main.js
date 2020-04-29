function sumPrimes(num) {

  let sum = 0;

  
  let count = 1;
  while (count <= num) {
   
    
    let canBeDividedByNumberCount = 0;

    let innerCount = 1;
    while (innerCount <= count) {
      if ((count % innerCount) === 0) {
        canBeDividedByNumberCount++;
      }
      innerCount++;
    }

   
    

    if (canBeDividedByNumberCount === 2) {
      sum += count;
    }
    
    count++;
  }
  

  return sum;
}

sumPrimes(10);
