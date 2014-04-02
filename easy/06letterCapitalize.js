function LetterCapitalize(str) {
  var words = str.split(" "); /* make string into array of words */
  for(var i = 0, y = words.length; i < y; i++){  /* for loop to loop through each word */
    var letters = words[i].split(""); /* make each word into an array of letters */
    letters[0] = letters[0].toUpperCase(); /* take the 1st in each letter array and capitalize it */
    words[i] = letters.join(""); /* each word equal the letter array joined to a single string */
  }
  return words.join(" ");  /* return the words array joined back to one string */
}


function LetterCapitalize(str) { 
  return str.replace(/\b[a-z]/g,function(c){return c.toUpperCase()});
}