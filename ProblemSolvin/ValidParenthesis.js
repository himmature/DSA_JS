var isValid = function (s) {
  const brackets = [];
  for (let char of s) {
    const lastElement = brackets[brackets.length - 1];
    if (char === "]" && lastElement === "[") {
      brackets.pop();
    } else if (char === "}" && lastElement === "{") {
      brackets.pop();
    } else if (char === ")" && lastElement === "(") {
      brackets.pop();
    } else {
      brackets.push(char);
    }
  }
  return !brackets.length;
};
const s = "[{}{()]";
const result = isValid(s);
console.log(result);
