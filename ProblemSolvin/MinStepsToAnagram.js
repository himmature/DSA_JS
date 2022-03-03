var minSteps = function(s, t) {
    let counter1 = {};
    let counter2 = {};
    let steps = 0;
    for(let i = 0; i < s.length; i++) {
        counter1[s[i]] = ++counter1[s[i]] || 1
        counter2[t[i]] = ++counter2[t[i]] || 1
    }
    console.log(counter1);
    console.log(counter2);
    for(let char in counter1) {
        if(!(char in counter2)) {
            steps += counter1[char];
        } else if(counter1[char] > counter2[char]) {
            steps += counter1[char] - counter2[char];
        }
    }
    return steps;
};

const s = "gctcxyuluxjuxnsvmomavutrrfb";
const t = "qijrjrhqqjxjtprybrzpyfyqtzf";
const result = minSteps(s, t);
console.log(result);

//"gctcxyuluxjuxnsvmomavutrrfb"
//"qijrjrhqqjxjtprybrzpyfyqtzf"
//l: 1, e: 2, o:1, d: 1