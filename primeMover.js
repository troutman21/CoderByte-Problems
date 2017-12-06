/ Using the JavaScript language, have the function PrimeMover(num) return the
// numth prime number. The range will be from 1 to 10^4. For example: if num is 16
// the output should be 53 as 53 is the 16th prime number.
  function primeMover(num){
    let counter = 0
    for(let i = 2; i < 104729; i++){
      if(primeTime(i)){
        counter ++;
        if(counter === num){
        return i;
        }
      }
    }//end of forloop
  }//end
  // console.log(primeMover(1000));
