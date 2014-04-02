function ArrayAdditionI(arr) { 
  var largest = arr.sort(function(a,b){return a-b}).pop();
  var arrSaved = arr.join(' ');
  var count = 0;
  function adding(numArr){
    count++;
    numArr = arrSaved.split(' ');
    var tempArr = [];
    while(numArr.length > 0){
      var randomIndex = Math.floor(Math.random()*numArr.length);
      var randNum = numArr.splice(randomIndex,1);
      tempArr.push(randNum);
    }
    var sum = 0;
    for(var i=0;i<tempArr.length;i++){
      sum += parseInt(tempArr[i]);
      if(sum === largest) return true;
    }
    if(count === 1000) return false;
    return adding(numArr);
  }
  return adding(arr);
}