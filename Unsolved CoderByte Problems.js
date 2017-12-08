// Using the JavaScript language, have the function ArrayAddition(arr) take the
// array of numbers stored in arr and return the string true if any combination
// of numbers in the array can be added up to equal the largest number in the
// array, otherwise return the string false. For example: if arr contains
// [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.
// The array will not be empty, will not contain all the same elements, and may
// contain negative numbers.

// Using the JavaScript language, have the function BinaryConverter(str) return
// the decimal form of the binary value. For example: if 101 is passed return 5,
// or if 1000 is passed return 8.

// Have the function TwoSum(arr) take the array of integers stored in arr, and
// determine if any two numbers (excluding the first element) in the array can sum
// up to the first element in the array. For example: if arr is
// [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the
// number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the
// numbers separated by a comma, in the order the first number appears in the array.
//  Pairs should be separated by a space. So for the example above, your program
//  would return: 5,2 -4,11
// If there are no two numbers that sum to the first element in the array, return -1

// function twoSum(arr){
// for//
//   function(arr[i]){
//     function(arr[i+1]);
//   }
// }//end

// define a function called "every" which takes two arguments, an array and a
// callback function. this callback can be considered a "test", as it will return
// true or false. "every" will iterate/loop through the array and pass each array
// element to the callback as an argument. if all outputs from the callback/test are
// true, every will return true. if any of the outputs is false, every will return
// false. Please do not use the native .every() method.
let numArr = [1,2,3];
  function every(arr, callback){
    for(let i = 0; i < arr.length; i++){
      if(!callback(arr[i])){
        return false;
      }
    }//end forloop
    return true;
  }//end
// use your "every" to determine if every number in numArr is greater than 0.
// Then, run a second test with the array [1, -2, 3]
// console.log(every(numArr, function(num){return num > 0}));
// console.log(every([1, -2, 3], function(num){return num > 0}));

// refactor your "every" function to everyReduce so that it uses the built-in "reduce" method.
function everyReduce(arr, callback){
  return arr.reduce(function(accum, curr){
    //accum is initially set to true;
    //as we itterate we need to only change accum
    console.log(accum, curr);
    return callback(curr) ? accum: false;
  }, true)
}//end

console.log(everyReduce(numArr, function(num){return num > 0}));
console.log(everyReduce([1, -2, 3], function(num){return num > 0}));
