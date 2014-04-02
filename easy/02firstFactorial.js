function FirstFactorial(num) { 
  if(num === 1){
    return 1;     /* return 1 when num is 1 to get out of recursion below  */
  }
  return num * FirstFactorial(num - 1); /* calling our function -1 until it reaches 1   */
}