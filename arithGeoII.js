// Using the JavaScript language, have the function ArithGeoII(arr) take the array
// of numbers stored in arr and return the string "Arithmetic" if the sequence
// follows an arithmetic pattern or return "Geometric" if it follows a geometric
// pattern. If the sequence doesn't follow either pattern return -1. An arithmetic
// sequence is one where the difference between each of the numbers is consistent,
//  where as in a geometric sequence, each term after the first is multiplied by
//  some constant or common ratio.
// Arithmetic example: [-2, -4, -6, -8] and Geometric
//  example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will
//  not be entered, and no array will contain all the same elements.

function arithGeoII(arr){
  //declare function for tesint GEO and ARI
  function isAri(array){
    let ariTest = array[1]-array[0];
    for(let i = 1; i < array.length; i++){
      if(array[i] - array[i - 1] !== ariTest){
        return false;
      }//end of if
    }//end forLoop
    return true;
  }//end of isAri

  function isGeo(array){
    let geoTest = array[1]/array[0];
    for(let i = 1; i < array.length; i++){
      if(array[i] / array[i - 1] !== geoTest){
        return false;
      }//end of if
    }//end of forLoop
    return true;
  }//end of Geo

  return isAri(arr) ? "Arithmetic": isGeo(arr) ? "Geometric": -1;
}//end

// console.log(arithGeoII([-1, 0, 1, 2, 3]));
