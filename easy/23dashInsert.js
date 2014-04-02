function DashInsert(num) { 
  var myArray = num.toString() /* make numbers a string in order to make single num array */
                   .split(""); /* make single num array */
  result = [];
  for(var i = 0, y = myArray.length; i < y; i++){ 
    result.push(myArray[i]); /* looping through each number and pushing to result array */
    if(myArray[i] % 2 != 0 && myArray[i + 1] % 2 != 0){ /* checking if the current number and next number are odd */
      result.push("-"); /* pushing the dash - if both numbers are odd, we've already pushed
                           the current number to the array, so this will be right after it  */
    }
  }
  return result.join(""); /* make the array a single string */
}