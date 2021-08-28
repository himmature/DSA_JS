const captizalizeWords = (arr) => {
    if(arr.length === 0) {
        return [];
    }
    let result = [];
    let str = arr[0];
    let newStr = str.toUpperCase();
    result.push(newStr);
    return result.concat(captizalizeWords(arr.slice(1)));
}

const result = captizalizeWords(['i', 'am', 'good', 'boy']);
console.log(result);