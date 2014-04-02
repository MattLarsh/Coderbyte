function VowelCount(str) { 
  var sum = 0;
  for(var i=0,y=str.length;i<y;i++){
    if(/[aeiou]/i.test(str[i])){
      sum += 1; 
    }
  }
  return sum;
}



function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/ig);
  return vowels.length;
}