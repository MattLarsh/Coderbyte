function SimpleAdding(num) { 
  if(num === 1){
   return 1; /* return 1 to get out of our function recursion below */
  }
  return num + SimpleAdding(num - 1); /* call our function - 1 until 1  */
}




function SimpleAdding(num) { 
  var hi = num;
  while(num>1){
    hi = hi + (num-1); 
    num--;
  }
  return hi;
}