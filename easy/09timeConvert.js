function TimeConvert(num) { 
  var min = num % 60; /* I need to learn more about modulos apparently */
  var hours = Math.floor(num/60); /* we need to round down here b/c minutes are accounted for with var min */
  return hours + ':' + minutes;     
}