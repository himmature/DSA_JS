const getMoneySpent = (keyboards, drives, b) => {
  keyboards.sort((a, b) => a - b);
  drives.sort((a, b) => a - b);
  let max = -1;
  for (let i = keyboards.length - 1; i >= 0; i--) {
    if (keyboards[i] < b) {
      for (let j = drives.length - 1; j >= 0; j--) {
        const sum = keyboards[i] + drives[j];
        if (sum < b && sum > max) {
          max = sum;
        }
      }
    }
  }
  return max;
};

const b = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];
const result = getMoneySpent(keyboards, drives, b);
console.log(result);
