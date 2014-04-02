function LongestWord(sen) { 
  var words = sen.split(" ")             /* turn string into array of words */
                 .sort(function(a,b){    /* sort method to arrange longest length to shortest length  */
    return b.replace(/[^a-z]/ig,"").length - a.replace(/[^a-z]/ig,"").length; /* line 4 comments below */
      });
  return words.shift(); /* shift method returns the 1st item in an array */
}

/* line 4 comments: (b.length - a.length) places words from longest length to shortest length 
line 4 comments: .replace(/[^a-z]/ig,"") replaces of the non-letters with nothing 
line 4 comments: /[^a-z]/ig is a regular expression https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
is an excellent resource to learn more  */