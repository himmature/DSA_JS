function sameFrequency(num1, num2){
    var num1Obj = {};
    var num2Obj = {};
    for(var i of num1.toString()){
      num1Obj[i] = (num1Obj[i] || 0) + 1
    }
    for(var j of num2.toString()){
      num2Obj[j] = (num2Obj[j] || 0) + 1
    }
    for(var val in num1Obj) {
      if (!num2Obj[val])
        return false;
      if(num1Obj[val] !== num2Obj[val])
        return false
    }
    return true;
  }
  
  console.log(sameFrequency(2828, 2882)); //true