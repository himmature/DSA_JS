var decodeString = function(s) {
    while(s.indexOf('[') !== -1) {
        let lastOpenIndex = s.lastIndexOf('[');
        let countIndex = lastOpenIndex - 1;
        let count = ''
        while(+s[countIndex] === 0 || +s[countIndex]) {
            count = s[countIndex] + count;
            countIndex--;
        }
        let temp = s.slice(lastOpenIndex);
        let closeIndex = temp.indexOf(']');
        temp = temp.slice()
        let res = ''
        const newStr = temp.slice(1, closeIndex);
        for(let i = 0; i < +count; i++) {
            res += newStr;
        }
        let strReplace = count + '[' + newStr + ']';
        s = s.replaceAll(strReplace, res);
    }
    return s;
};

const s = "100[leetcode]";
// const s = "2[2[cd]]";
const result = decodeString(s);
console.log(result);
