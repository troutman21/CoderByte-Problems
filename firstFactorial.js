// Have the function FirstFactorial(num) take the num parameter being passed and
 // return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the
 // test cases, the range will be between 1 and 18 and the input will always be an
 // integer.
  function firstFactorial(num){
    if (num === 0){
      return 1
    }
   return num * firstFactorial(num -1);
  }//end
// console.log(firstFactorial(8));//40320
