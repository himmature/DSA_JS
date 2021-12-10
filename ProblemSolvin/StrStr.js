const strStr = (haystack, needle) => {
    if(haystack.length < needle.length) return -1;
    if(!haystack.length || !needle.length) return 0;
    return haystack.indexOf(needle);
}

const result = strStr('', '');
console.log(result)
