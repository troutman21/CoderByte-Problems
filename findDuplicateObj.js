/using objects
function findDuplicatesObj(str){
  let result = {};
  let strArray = str.split(" ");
  strArray.forEach(function(e){
    //check to see if it exists in result obj
    if(result.hasOwnProperty(e)){
      result[e]++;
    }else{
      result[e]=1;
    }
  });//end of forEach
  var most = 0;
  var mostWord;
  for(key in result){
    if(result[key] > most){
      most = result[key];
      mostWord = key;
    }
  }//end of forIn
  return mostWord;
}//end
// console.log(findDuplicatesObj('redux array hello object hello hello array folder redux'));
