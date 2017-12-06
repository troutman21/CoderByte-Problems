// Have the function VowelCount(str) take the str string parameter being passed
// and return the number of vowels the string contains (ie. "All cows eat grass and
//  moo" would return 8). Do not count y as a vowel for this challenge.
function vowelCount(str){
  var  result = 0;
  str = str.split("");
  str.forEach(function(letter){
    if(/[aeiou]/i.test(letter)){
      result ++;
    }
  });//end of forEach
  return result;
}

// console.log(vowelCount("All cows eat grass and moo"));
