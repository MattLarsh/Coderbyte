function ABCheck(str) { 
  return /a...b/.test(str); /* Got to love RegEx! This dot here -> . <- is a metacharacter that stands for any character */        
}                           /* returns true if a is separated 3 spaces from b, else false