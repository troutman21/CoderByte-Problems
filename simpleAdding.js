// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For
// example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.
function simpleAdding(num){
  //use recursion
  if(num === 0){
    return 0;
  }
  return num + simpleAdding(num - 1);
}
// console.log(simpleAdding(8));
