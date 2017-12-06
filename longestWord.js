// Have the function LongestWord(sen) take the sen parameter being passed and
// return the largest word in the string. If there are two or more words that are
// the same length, return the first word from the string with that length. Ignore
// punctuation and assume sen will not be empty.
function longestWord(sen){
  let splitSen = sen.split(" ");
  var result = splitSen.reduce(function(acc, curr){
    return curr.length > acc.length? curr: acc;
  })//end of reduce
  return result;
}//end
// console.log(longestWord("Hello from Codesmith!"));
// console.log("hello",longestWord("Hello fromk Codesmith"));
