// Create a function findDuplicate(str) that takes the str parameter being passed
// in and returns out the dupicate words.
function findDuplicate(str){
  let firstArr = [];
  let resultArr = [];
  let strArray = str.split(", ");
  strArray.forEach(function(e){
    //if e is not present in firstArr and  push it in fistArr
    if(firstArr.indexOf(e) === -1){
      firstArr.push(e);
    // else if e is not present in result push it in result
    }else if (resultArr.indexOf(e) === -1){
    resultArr.push(e);
    }
  });//end of ForEach
  return resultArr;
}//end
// console.log(findDuplicate('redux, array, hello, object, hello, hello, array, folder, redux'));
