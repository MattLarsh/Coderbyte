function MeanMode(arr) { 
  var numMap = {};
  var maxCount = 1;
  var maxNum = arr[0];
  var sum = 0;
  for(var i=0,y=arr.length;i<y;i++){
    sum += arr[i];
    numMap[arr[i]] = numMap[arr[i]] + 1 || 1;
    if(numMap[arr[i]] > maxCount){
      maxCount = numMap[arr[i]];
      maxNum = arr[i];
    }
  }
  if(maxNum === (sum/arr.length)){
    return 1; 
  }
  return 0;
}








