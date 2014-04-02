function NumberAddition(str) { 
  var reg = /[0-9]+/g; /* regExp, any number, one or more characters */
  var numArray = str.match(reg); /* goes through our string and puts anything that matches are regExp into an array of strings  */
  var sum = 0;
  for(var i = 0, y = numArray.length; i < y; i++){
    sum += parseInt(numArray[i]); /* adds everything in our numArray together, parseInt makes our string a number */ 
  }
  return sum;      
}