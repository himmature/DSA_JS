const findLongestSubstring = (str) => {
    let longest = 0;
    let count = 0;
    let obj = {};
    let start = 0;
    let next = start;
    while(start < str.length) {
        if(str[next] && !obj[str[next]]) {
            obj[str[next]] = 1
            count++;
            if(next < str.length) {
                next++;
            }
        } else {
            if(longest < count ) {
                longest = count;
            }
            start++;
            next = start;
            count = 0;
            obj={};
        }
    }
    return longest;
}

const result = findLongestSubString('thisishowwedoit');
console.log(result);