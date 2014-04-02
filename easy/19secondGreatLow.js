function SecondGreatLow(arr) { 
  var unique = arr.join(' ').match(/(\b\d+\b)(?!.+\b\1\b)/g); 
  unique.sort(function(a,b){return a-b});
  if(unique.length == 1){
    return unique[0] + ' ' + unique[0]; 
  }
  return unique[1] + ' ' + unique[unique.length -2];
}