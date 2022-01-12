function anagrams(str1, str2) {
    if(str1.length !== str2.length) return false;
    let counter1 = {};
    let counter2 = {};
    for(let i of str1) {
        counter1[i] = ++counter1[i] || 1;
    }
    for(let i of str2) {
        counter2[i] = ++counter2[i] || 1;
    }
    for(let key in str1) {
        if(counter1[key] !== counter2[key]) return false;
    }
    return true;
}

const result = anagrams('nagarams', 'anagrams');
console.log(result);