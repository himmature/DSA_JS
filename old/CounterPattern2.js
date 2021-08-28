function anagrams(str1, str2){
    if(str1.length !== str2.length) {
      return false;
    }
    let counter1 = {};
    let counter2 = {};
    for(let c of str1) {
      counter1[c] = counter1[c] + 1 || 1;
    }
    for(let c of str2) {
      counter2[c] = counter2[c] + 1 || 1;
    }
    // console.log(counter1);
    // console.log(counter2);
    for(let c of str1){
      if(!counter2.hasOwnProperty(c)){
        return false
      }
      if((counter1[c]) !== counter2[c]){
        return false;
      }
    }
    return true;
  }
  
  console.log(anagrams('carss', 'arcss'));
  
  //('carss', 'srcas')  => true
  //('car' 'rcc')  => false
  //('ggs', 'gs')  => false