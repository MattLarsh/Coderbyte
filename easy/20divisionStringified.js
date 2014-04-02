function DivisionStringified(num1,num2) { 
  var num = Math.round(num1/num2).toString().split("");
  var index = -3;
  while(num.length + index > 0){
    num.splice(index,0,",");
    index -= 4;
  }
  return num.join("");
}