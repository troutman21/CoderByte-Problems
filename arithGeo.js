// Using the JavaScript language, have the function ArithGeo(arr) take the array
 // of numbers stored in arr and return the string "Arithmetic" if the sequence
 // follows an arithmetic pattern or return "Geometric" if it follows a geometric
 // pattern. If the sequence doesn't follow either pattern return -1. An arithmetic
 //  sequence is one where the difference between each of the numbers is consistent,
 //   where as in a geometric sequence, each term after the first is multiplied by
 //   some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric
 //    example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0
 //    will not be entered,
function arithGeo(arr){
  let ariTest = arr[1] - arr[0];
  let ariAnswer = true;
  let geoTest = arr[1] / arr[0];
  let geoAnswer = true;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - arr[i - 1]!== ariTest){
      ariAnswer = false;
    }
    if (arr[i]/arr[i - 1] !== geoTest){
      geoAnswer = false;
    }
  }//end of forLoop
  if(ariAnswer){
    return "Arithmetic";
  }else if (geoAnswer){
    return "Geometric";
  }else{
    return "Neither";
  }
}//end
// console.log(arithGeo([2, 6, 18, 54]), arithGeo([2, 4, 6, 8]));
