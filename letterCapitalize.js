// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only one space.
function letterCapitalize(str){
  var result = ""
  strArray = str.split(" ");
  for(let i = 0; i < strArray.length; i++){
    result += strArray[i].charAt(0).toUpperCase();
    result += strArray[i].substring(1);
    result += " ";
  }//end of for loop string.substring(start, end)
  return result;
}
// console.log(letterCapitalize("hello from codesmith!"));
