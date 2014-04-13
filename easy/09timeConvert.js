function TimeConvert(num) { 
  var min = num % 60; 
  var hours = Math.floor(num/60); /* we need to round down here b/c minutes are accounted for with var min */
  return hours + ':' + minutes;     
}
