function areArraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let counter1 = {};
    let counter2 = {};
    arr1.forEach(item => counter1[item] = ++counter1[item] || 1);
    arr2.forEach(item => counter2[item] = ++counter2[item] || 1);
    for(let key in counter1) {
        if(!counter2[key]) return false;
        if(counter1[key] !== counter2[key]) return false;
    }
    return true;
}

const result = areArraysEqual([1,4,2], [0,0,0]);
console.log(result)