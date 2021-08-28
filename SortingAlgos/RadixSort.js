function getDigit(num, place) {
    let reverseNum = num.toString();
    if(place >= reverseNum.length) return 0;
    return reverseNum[reverseNum.length - 1 - place];
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(arr) {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = digitCount(arr[i])
        if (digitCount(arr[i]) > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}

function radixSort(arr) {
    let maxCount = mostDigits(arr);
    for (let i = 0; i < maxCount; i++) {
        let bucket = Array.from({length: 10}, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

const result = radixSort([8, 18, 0, 6, 7]);
console.log(result);