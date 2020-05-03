function smallestCommons(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var listOfNum =[];
    while (min<=max){
      
        listOfNum.push(min);
        min++;
    }
    
    var result = listOfNum[0];
    
  for (var i = 1; i<listOfNum.length; i++)
      result = findLCM(result, listOfNum[i]);
    console.log(result);
    
    return result;
  }
  
  function gcd(a, b){
    
    while (a !== b){
      
      if(a > b)
        a = a - b;
      else
        b = b - a;
      
    }
    
  
    return a; // GCD of two numbers
  }
  
  function findLCM(a, b){
    
    return a * (b / gcd (a,b));
    
  }
  smallestCommons([1,5]);