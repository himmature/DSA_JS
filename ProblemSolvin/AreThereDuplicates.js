const areThereDuplicatesFC = (...args) => {
    const f1 = {};
    for(let val of args) {
        f1[val] = ++f1[val] || 1;
    }
    for(let key in f1) {
        if(f1[key] > 1) {
            return true;
        }
    }
    return false
}

const result = areThereDuplicatesFC('a', 'b', 'c');
console.log(result);