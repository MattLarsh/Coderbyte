function ArithGeo(arr) { 
  if(arr[1] - arr[0] /* difference between the first two items of the array */
   === 
  arr[arr.length - 1] - arr[arr.length - 2]){ /* difference between the last two items of the array */
    return "Arithmetic"; 
 }else if(arr[1] / arr[0] /* dividing first two items of the array */
   === 
   arr[arr.length - 1] / arr[arr.length - 2]){  /* dividing last two items of the array */
     return "Geometric";
           }
   else{
     return -1;
           }
}