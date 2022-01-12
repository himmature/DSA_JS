const combinationSum = (candidates, target) => {
    const result = [];
    let sum = 0;
    for (let i = 0; i < candidates.length; i++) {
        if(!(target % candidates[i])) {
            const length = target / candidates[i];
            const combination = new Array(length).fill(candidates[i], 0);
            result.push(combination);
        }
        sum += candidates[i];
    }   
}

const candidates = [2,3,6,7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result);