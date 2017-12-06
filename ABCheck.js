// Have the function ABCheck(str) take the str parameter being passed and return
 // the string true if the characters a and b are separated by exactly 3 places
 // anywhere in the string at least once (ie. "lane borrowed" would result in true
 // because there is exactly three characters between a and b). Otherwise return
 // the string false.
function ABCheck(str){
  var result = false;
  str = str.split("");
//iterate through array looking for an "a"
  str.forEach(function(letter, index){
    if(letter === "a"){
      if(str[index - 4] === "b" || str[index + 4] === "b"){
        result = true;
      }
    }
  });//end of forEach
  return result;
}
// console.log(ABCheck('lank borrowed'));
