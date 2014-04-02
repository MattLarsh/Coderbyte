function LetterChanges(str) { 
  return str.replace(/[a-z]/gi, function(c) { /* replace all letters in string with our function */
    var next = String.fromCharCode(c.charCodeAt() + 1); /* line 3 comments below */
    if (/[aeiou]/.test(next)) {  /* tests if vowels are in our var next */
    	next = next.toUpperCase(); 
    return c == 'Z' ? 'A' : c == 'z' ? 'a' : next; 
  }
  });
         
}

/* line 3 comments: String.fromCharCode() gives us a letter for different Unicode Values 65-122
   ex) String.fromCharCode(65) returns "A"
   c.charCodeAt() finds the Unicode Value, then add 1 to get the next letter */

