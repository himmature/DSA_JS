const sameFrequency = (n1, n2) => {
    let f1 = {};
    let f2 = {};
    for(let val of n1.toString()) {
        f1[val] = ++f1[val] || 1;
    }
    for(let val of n2.toString()) {
        f2[val] = ++f2[val] || 1;
    }
    for(let key in f1) {
        if(!f2[key]) {
            return false;
        }
        if(f1[key] !== f2[key]) {
            return false
        }
    }
    return true;
}

const result = sameFrequency(234,332);
console.log(result);