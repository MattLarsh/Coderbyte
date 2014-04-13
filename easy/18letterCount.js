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

/////////// regEx answer /////////////////
function LetterCountI(str) { 
  var words = str.split(' ');
  var maxLetCount = 0;
  for(var i=0;i<words.length;i++){
    var multipleLets = words[i].match(/([a-z])(?=.*\1)/ig);
    if(multipleLets != null){
      if(multipleLets.length > maxLetCount){
        maxLetCount = multipleLets.length;
        var maxWord = words[i];
      }
    }
  }
  if(maxLetCount === 0) return -1;
  return maxWord;
}