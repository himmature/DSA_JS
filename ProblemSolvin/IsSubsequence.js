const isSubsequence = (str1, str2) => {
    let count = 0;
    for(let val of str2) {
        if(str1[count] === val){
            count++;
        }
    }
    return count === str1.length;
}

const result = isSubsequence('abc', 'acbclkjasflkjdfk');
console.log(result);