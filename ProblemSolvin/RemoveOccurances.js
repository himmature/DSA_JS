var removeOccurrences = function(s, part) {
    if(s.indexOf(part) === -1) return s;
    let newStr = s.replace(part, '');
    return removeOccurrences(newStr, part);
};

const s = "daabcbaabcbc";
const part = "abc";

const result = removeOccurrences(s, part);
console.log(result);