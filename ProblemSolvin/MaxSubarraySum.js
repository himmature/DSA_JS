const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;
  var max = -Infinity;
  var sum = 0;
  for(var i=0; i<num; i++) {
    sum += arr[i]
  }
  max = sum;
  for(var j=num; j<arr.length; j++) {
    sum = sum + arr[j] - arr[j-num];
    max = Math.max(sum, max);
  }
  return max;
}

const sum = maxSubarraySum([100,1200,400,600,900], 2);
console.log(sum);