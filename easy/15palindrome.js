function Palindrome(str) { 
	var noSpaces = str.replace(/ /g,"");
	var backwards = noSpaces.split("").reverse().join("");
	return noSpaces == backwards;
}



function Palindrome(str) { 
  var noSpace = str.match(/[^ ]/g);
  for(var i=0;i<noSpace.length;i++){
    if(noSpace[i] != noSpace[noSpace.length-i-1]){
      return false; 
    }
  }
  return true;
}


function Palindrome(str) { 
  var noSpace = str.match(/[a-z]/ig).join('').toLowerCase();
  function recurs(str){
    if(str.length <= 1) return true;
    if(str.charAt(0) != str.charAt(str.length -1))return false;
    return recurs(str.substr(1, str.length-2));
  }
  return recurs(noSpace);
}
