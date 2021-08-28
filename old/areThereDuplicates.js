function areThereDuplicates () {
    var argsArray = Array.from(arguments);
    var counter = {};
    for(var i=0;i<argsArray.length;i++){
      if(counter[argsArray[i]]) {
        return true
      } else {
        counter[argsArray[i]] = 1
      }
    }
    return false;
  }
  
  var result = areThereDuplicates('b','c','c','r'); //true
  console.log(result);