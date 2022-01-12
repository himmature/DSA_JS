function same(arr1, arr2) {
    let counter1 = {};
    let counter2 = {};
    if(arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        counter1[arr1[i]] = ++counter1[arr1[i]] || 1
    }
    for (let i = 0; i < arr2.length; i++) {
        counter2[arr2[i]] = ++counter2[arr2[i]] || 1
    }
    for(let key in counter1) {
        if(counter1[key] !== counter2[key**2]) return false
    }
    return true;
}

const result = same([1,2,1], [4,4,1]);
console.log(result);