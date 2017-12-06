// Using the JavaScript language, have the function Division(num1,num2) take both
//  parameters being passed and return the Greatest Common Factor. That is, return
//   the greatest number that evenly goes into both numbers with no remainder. For
//    example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be
//     4. The range for both parameters will be from 1 to 10^3.

function division(num1, num2){
  let arr1 = [];
  let arr2 = [];
  for(let i = 0; i <= num1; i++){
    if(num1 % i === 0 ){
      arr1.push(i);
    }
  }//end of i forloop
  for(let j = 0; j <= num2; j++){
    if(num2 % j === 0 ){
      arr2.push(j);
    }
  }//end of j forLoop
for(let k = arr1.length; k >= 0; k--){
  if(arr2.indexOf(arr1[k]) > -1){
    return arr1[k];
  }
}
}//end
// console.log(division(10,1000));
