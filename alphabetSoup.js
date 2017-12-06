// Have the function AlphabetSoup(str) take the str string parameter being passed
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

//***** I need to refactor to take into account the capital letters *****
function alphabetSoup(str){
  //split str
  str = str.split(" ");
  var result = "";
  //iterate through new array
  str.forEach(function(word){
    result += word.split("").sort(function(a,b){
      a = a.toLowerCase();
      b = b.toLowerCase();
      if(a === b){
        return 0;
      }
      return a < b ? -1: 1;
    }).join("") + " ";
  });
  return result;
}
// console.log(alphabetSoup('Hello from Earth'))
