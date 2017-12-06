// Using the JavaScript language, have the function PalindromeTwo(str) take the str
//  parameter being passed and return the string true if the parameter is a
//  palindrome, (the string is the same forward as it is backward) otherwise return
//   the string false. The parameter entered may have punctuation and symbols but
//   they should not affect whether the string is in fact a palindrome. For example:
//    "Anne, I vote more cars race Rome-to-Vienna" should return true.

let palindromTwo = function(str){
  let str2 = str.toLowerCase().split(/\W/).join("");
  let str2R = str2.split("").reverse().join("");
  return str2 == str2R ? true: false;
}
// console.log(palindromTwo("Anne, I vote more cars race Rome-to-Vienna"));
