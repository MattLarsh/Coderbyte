function LetterCountI(str) { 
  var words = str.split(" ");
  var letterMap = {};
  var maxCount = 1;
  var maxWord = words[0];
  for(var i = 0,y=words.length;i<y;i++){
    var eachWord = words[i];
    letterMap = {};
    for(var j = 0,z=eachWord.length;j<z;j++){
      letterMap[eachWord[j]] = letterMap[eachWord[j]] + 1 || 1;
      if(letterMap[eachWord[j]] > maxCount){
        maxWord = eachWord;
        maxCount = letterMap[eachWord[j]];
      }
    }
  }
  if(maxCount > 1){
    return maxWord
      }else{
     return "-1";
      }
}