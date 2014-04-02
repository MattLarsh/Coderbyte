function CountingMinutes(str) { 
  var time1 = str.match(/.+(?=-)/g).join("");
  var time2 = str.match(/\d{1,2}:\d\d[ap]m(?!-)/g).join("");
  var hours1 = time1.match(/\d{1,2}(?=:)/g) * 1;
  var hours2 = time2.match(/\d{1,2}(?=:)/g) * 1;
  if(hours1 != 12 && /p/g.test(time1)){
     hours1 += 12; 
  }
  if(hours2 != 12 && /p/g.test(time2)){
     hours2 += 12; 
  }
  if(hours1 == 12 && /a/g.test(time1)){
     hours1 = 0; 
  }
   if(hours2 == 12 && /a/g.test(time2)){
     hours2 = 0; 
  }
  var mins1 = time1.match(/\d\d(?=[ap])/g) * 1;
  var mins2 = time2.match(/\d\d(?=[ap])/g) * 1;
  var totalMins1 = (hours1 * 60) + mins1;
  var totalMins2 = (hours2 * 60) + mins2;
  if(totalMins1 > totalMins2){
    return Math.abs(1440 - (totalMins1 - totalMins2));  
  } else if(totalMins1 < totalMins2){
    return Math.abs((totalMins2 - totalMins1));  
  }
}




function CountingMinutes(str) { 
  var parse = function (s) {
    var ampm = s.substring(s.length - 2);
    s = s.substring(0, s.length - 2);
    var l = parseInt(s.substring(0, s.indexOf(':')), 10);
    var r = parseInt(s.substring(1 + s.indexOf(':')), 10);
    return l * 60 + r + (ampm == 'pm' ? 12 * 60 : 0);
  };
  var a = parse(str.substring(0, str.indexOf('-'))),
      b = parse(str.substring(str.indexOf('-') + 1));
  return ((b - a) % (24 * 60) + (24 * 60)) % (24 * 60);            
}