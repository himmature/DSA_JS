const addTwoReversedArrays = (l1,l2) => {
    const newL1 = l1.reverse().join('');
    const newL2 = l2.reverse().join('');
    const sum = +newL1 + +newL2;
    const result = sum.toString().split('').reverse();
    return result;
}
const l1 = [2,4,3];
const l2 = [5,6,4];
const result = addTwoReversedArrays(l1,l2);
console.log(result);