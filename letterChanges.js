// Have the function LetterChanges(str) take the str parameter being passed and modify
// it using the following algorithm. Replace every letter in the string with the
// letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize
// every vowel in this new string (a, e, i, o, u) and finally return this modified string.

//-----------------------first attempt --------------------------
function letterChanges(str){
  var result = [];
  strArray = str.toLowerCase().split("");;
  strArray.forEach(function(e){
    let foo = e.charCodeAt(0);
    //spaces
    if (foo === 32){
      result.push(String.fromCharCode(32));
    //z and a Capital
    }else if (foo === 122){
      result.push(String.fromCharCode(65));
    //e 100->69
    }else if (foo === 100){
      result.push(String.fromCharCode(69));
    // i 104 => 73
    }else if(foo === 104){
      result.push(String.fromCharCode(73));
    //o 110 -> 79
    }else if (foo === 110){
      result.push(String.fromCharCode(79));
    //u 116 -->85
    }else if(foo === 116){
      result.push(String.fromCharCode(85));
    }else{
      result.push(String.fromCharCode(foo + 1));
    }//end of if/else
  });//end of forEach
  return result.join("");
}//end
// console.log(letterChanges("Hello from Codesmith!"));

//---------------second attempt------------------
//this still can be refactored to deal with the white space better. It can be done in the replace callback.
function letterChanges2(str){
  // Split str into array of Strings.
  let splitStr = str.split(" ");
  let transformedCodeArray = "";
  //Convert each string into ascii codes +1
  splitStr.forEach(function(word){
    let newArr = "";
    for(var i = 0; i < word.length; i++){
      word[i] === "z"|| word[i] ==="Z" ? newArr += "a": newArr += String.fromCharCode(word[i].charCodeAt(0) + 1);
    }//end of forLoop
    transformedCodeArray += newArr + " ";
  });//end of word forEach
  //change voules
return transformedCodeArray.replace(/[aeiou]/g, function(match){
  return match.toUpperCase();
  });
}//end
// console.log(letterChanges2("Hello from Codesmith!"));
