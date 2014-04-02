function ThirdGreatest(strArr) { 
  var sorted = strArr.sort(function(a,b){
    return b.length - a.length; /* sorting the array from longest to shortest */
  });   
  return sorted[2]; /* return the 3rd item in the array */
}