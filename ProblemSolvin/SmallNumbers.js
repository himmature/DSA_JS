const smallNumbers = (arr) => {
    let currentIndex = 0;
    let next = 0;
    let counter = 0;
    let result = [];
    while(currentIndex < arr.length) {
        if(next < arr.length) {
            if(arr[currentIndex] > arr[next]) {
                counter++;
            } 
            next++;
        } else {
            currentIndex++;
            next = 0;
            result.push(counter);
            counter = 0;
        }
    }
    return result;
}
const arr = [8,1,2,2,3];
const result = smallNumbers(arr);
console.log(result);