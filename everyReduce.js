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
    return callback(curr) ? accum: false;
  }, true)
}//end

console.log(everyReduce(numArr, function(num){return num > 0}));
console.log(everyReduce([1, -2, 3], function(num){return num > 0}));
