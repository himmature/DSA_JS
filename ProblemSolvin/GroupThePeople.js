/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
     const groups = {};
     let temp = [];
    for(let i = 0; i < groupSizes.length; i++) {
        let current = groupSizes[i];
        if(!groups[current]) {
            groups[current] = [i];
        } else {
            if(groups[current].length !== current) {
                groups[current] = [...groups[current], i];
            } else {
                temp.push(groups[current]);
                groups[current] = [i]
            }
        }
    }
    return [...temp, ...Object.values(groups)];
};

const groupSizes = [2,1,3,3,3,2];
const result = groupThePeople(groupSizes);

console.log(result);