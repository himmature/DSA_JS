function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
     return false;
    }
    var counter1 = {};
    var counter2 = {};
  
    for(let ch of arr1){
      counter1[ch] = counter1[ch]+1 || 1;
    }
    for(let ch of arr2){
      counter2[ch] = counter2[ch]+1 || 1;
    }
    // console.log(counter1);
    // console.log(counter2);
    for(let value of arr1) {
      if(!counter2[value**2]){
        return false;
      }
      if(counter1[value] !== counter2[value**2]){
        return false;
      }
    }
    return true;
  }
  console.log(same([0,2,2], [0,4,4]));
  
  // [1,2,3] [4,9,1]  => true
  // [1,2,3] [4,9]  => false
  // [1,2,1] [4,4,1]  => false
  // [2,3,4] [4,4,16] ==> false