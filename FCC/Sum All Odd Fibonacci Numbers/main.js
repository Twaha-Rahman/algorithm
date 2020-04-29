function sumFibs(num) {

  let keepGoing = true;

  let sum = 0;

  const allOddNums = [1, 3, 5, 7, 9 ];

  var a = 1, b = 0, temp;

  while (keepGoing){
    temp = a;
    a = a + b;
    b = temp;

const lastDigitOfNewNum = parseInt(b.toString().slice(-1));



if (allOddNums.includes(lastDigitOfNewNum)) {
  console.log(b);
  
  
  if (b <= num) {
    console.log(num);
    
    sum = sum + b;
  }

  if (b > num) {
    keepGoing = false;
  }

}

  
  }

  
console.log(sum);

  return sum;
   
}

sumFibs(4);
