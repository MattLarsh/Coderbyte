 function SimpleSymbols(str) { 
  for(var i=0,y=str.length;i<y;i++){
     if(/[a-zA-Z]/.test(str[i])){
       if(str[i - 1] != "+" || str[i + 1] != "+"){
         return false;
       } 
     }
   }
   return true
 }



 /* RegEx Answer */
 function SimpleSymbols(str) { 
   if((/([^\+][a-z])|([a-z][^\+])|^[a-z]|[a-z]$/g).test(str)){
     return false; 
   }
   return true;
 }


