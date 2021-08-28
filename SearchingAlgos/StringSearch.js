const StringSearch = (str, pattern) => {
    let count = 0;
    if(pattern.length > str.length) return count;
    for(let i = 0; i<str.length; i++) {
        let subString = str.slice(i, i + pattern.length);
        if(subString === pattern) count++; 
    }
    return count;
}

const result = StringSearch('wwozonwonwon', 'on');
console.log(result);