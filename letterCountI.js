// Have the function LetterCountI(str) take the str parameter being passed and
// return the first word with the greatest number of repeated letters. For example:
//  "Today, is the greatest day ever!" should return greatest because it has 2 e's
//  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words
//   with repeating letters return -1. Words will be separated by spaces.
function letterCountI(str){
  var compare = 0;
  var result;
  var arrOfObjs = [];
  str = str.split(" ");
  str.forEach(function(word){
    var wordObj = {};
    word.split("").forEach(function(letter){
      wordObj.hasOwnProperty(letter) ? wordObj[letter]++ : wordObj[letter] = 1;
    });//end of letter forEach
    arrOfObjs.push(wordObj);
  });//end of word forEach
  arrOfObjs.forEach(function(obj, i){
    //check all the values of object
    for(var key in obj){
      if(obj[key]> compare){
        compare = obj[key];
        result = str[i]
      }
    }//end of for in
  });//end of obj forEach
  return result;
}//end

// console.log(letterCountI("Today, is the greatest day ever!"));
