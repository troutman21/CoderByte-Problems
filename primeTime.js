//=================================
//------------Medium---------------
//=================================
//
// Using the JavaScript language, have the function PrimeTime(num) take the num
// parameter being passed and return the string true if the parameter is a prime
// number, otherwise return the string false. The range will be between 1 and 2^16.
function primeTime(num){
  var result = true;
  for (let i = 2; i < num; i++){
    var answer = num % i;
    if (answer === 0){
     return false;
    }
  }//end of forLoop
  return result;
}//end
// console.log(primeTime(7));
