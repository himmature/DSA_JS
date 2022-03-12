// var numSplits = function(s) {
//     let count = 0;
//     for(let i = 1; i <= s.length - 1; i++) {
//         const s1 = s.slice(0, i);
//         const s2 = s.slice(i);
//         let set1 = new Set();
//         let set2 = new Set();
//         for(let j = 0; j < s1.length; j++) {
//             !set1.has(s1[j]) && set1.add(s1[j]);
//         }
//         for(let j = 0; j < s2.length; j++) {
//             !set2.has(s2[j]) && set2.add(s2[j]);
//         }
//         if(set1.size === set2.size) count++;
//     }
//     return count;
// };

var numSplits = function (s) {
    let goodsplits = 0;
    let len = s.length;
    let set = new Set();
    let forward = [];
    let backward = [];
    for (let i = 0; i < len; i++) {
        set.add(s[i]);
        forward[i] = set.size;
    }
    set.clear();
    for (let i = len - 1; i >= 0; i--) {
        set.add(s[i]);
        backward[i] = set.size;
    }
    console.log(set);
    console.log(forward);
    console.log(backward);
    for (let i = 0; i < len; i++) {
        if (forward[i] === backward[i + 1]) {
            goodsplits++;
        }
    }
    return goodsplits;
};

const s = 'aabba';
const result = numSplits(s);
console.log(result);