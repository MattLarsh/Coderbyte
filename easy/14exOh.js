function ExOh(str) { 
  var letters = str.split(""); /* make letters array from string */
  var xCount = 0; /* set x and o counters */
  var oCount = 0;
  for(var i = 0, y=letters.length; i < y; i++){  /* loop through each letter */
    if(/x/.test(letters[i])){ /* returns true if letter is "x" */
       xCount += 1; /* counting the exes */
    }
    if(/o/.test(letters[i])){ /* returns true if letter is "o" */
       oCount += 1; /* counting the ohhhs */
    }
  }
  return xCount == oCount; /* returns true or false */
}



function ExOh(str) {
  var xs = str.match(/x/g);
  var os = str.match(/o/g);
  if (xs == null){
    return false
  }else if (os == null){
    return false
  }
  return xs.length == os.length;
}



function ExOh(str) { 
  if(str.indexOf("x") == -1) return false;
  if(str.indexOf("o") == -1) return false;
  return str.match(/o/gi).length === str.match(/x/ig).length;   
}