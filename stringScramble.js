// Using the JavaScript language, have the function StringScramble(str1,str2) take
//  both parameters being passed and return the string true if a portion of str1
//  characters can be rearranged to match str2, otherwise return the string false.
//   For example: if str1 is "rkqodlw" and str2 is "world" the output should return
//   true. Punctuation and symbols will not be entered with the parameters.
function stringScramble(str1, str2){
  for(let i = 0; i < str2.length; i++){
    //iterate through str2
    //check to see if current index is present in str1.
    if(str1.indexOf(str2[i]) === -1){
      return false;
    }
  }
  return true;
}//end
// console.log(stringScramble("rkqodlw", "world"));
