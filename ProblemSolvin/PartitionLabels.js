var partitionLabels = function(s) {
    let result = [];
    let index = -1;
    let start = 0;
    for(let i = 0; i < s.length; i++) {
        let lastIndex = s.lastIndexOf(s[i]);
        index = Math.max(lastIndex, index);
        if(index === i) {
            result.push(i + 1 - start);
            start = i + 1;
        }
    }
    return result;
};
//The partition is "ababcbaca", "defegde", "hijhklij".
//Output: [9,7,8]
const str = 'ababcbacadefegdehijhklij';
const result = partitionLabels(str);
console.log(result);