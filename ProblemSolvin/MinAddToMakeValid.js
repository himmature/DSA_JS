// var minAddToMakeValid = function(s) {
//     let pArr = [];
//     for(let i = 0; i < s.length; i++) {
//         let lastVal = pArr[pArr.length - 1];
//         if(lastVal === '(' && s[i] === ')') {
//             pArr.pop();
//         } else {
//             pArr.push(s[i]);
//         }
//     }
//     return pArr.length;
// };

var minAddToMakeValid = function(s) {
    if(s.indexOf('()') === -1) return s.length;
    s = s.replace('()', '');
    return minAddToMakeValid(s);
};

const s = "(()))((";
const result = minAddToMakeValid(s);
console.log(result);