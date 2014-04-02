function SwapCase(str) { 
  var letters = str.split(""); /* make an array of letters */
  var result = []; 
  for(var i = 0 , y = letters.length; i < y; i++){
    if(/[a-z]/.test(letters[i])){ /* catch lowercase letters */
     result.push(letters[i].toUpperCase()); /* change to uppercase then add to our empty result array */
  } else if(/[A-Z]/.test(letters[i])){  /* catch uppercase letters */
     result.push(letters[i].toLowerCase()); /* change to lowercase then add to our result array */
  } else{
     result.push(letters[i]); /* add all non-letters to result array */
  }
  }
  return result.join("");
}


function SwapCase(str) { 
  var swap = str.replace(/[a-z]/ig,function(c){
    if(c == c.toUpperCase()) var next = c.toLowerCase();
    if(c == c.toLowerCase()) var next1 = c.toUpperCase();
    return c == c.toLowerCase() ? next1 : next
  });
  return swap;
}