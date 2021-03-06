const nestedEvenSum = (obj, sum = 0) => {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            if(obj[key]%2 === 0) {
                sum += obj[key];
            }
        } else if(typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        }

    }
    return sum;
}

let obj1 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

const result = nestedEvenSum(obj1);
console.log(result);
