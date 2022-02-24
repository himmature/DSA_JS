function minimumNumber(n, password) {
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";
    let numbersError = true;
    let lowerCaseErrors = true;
    let upperCaseErrors = true;
    let specialCharError = true;

    let count = 4;
    for(let char of password) {
        if(numbersError && numbers.includes(char)) {
            count--;
            numbersError = false;
        }
        if(lowerCaseErrors && lower_case.includes(char)) {
            count--;
            lowerCaseErrors = false;
        }
        if(upperCaseErrors && upper_case.includes(char)) {
            count--;
            upperCaseErrors = false;
        }
        if(specialCharError && special_characters.includes(char)) {
            count--;
            specialCharError = false;
        }
    }
    const length = password.length;
    if(length >= 6) return count;
    if((6 - length) > count) return 6 - length;
    else return count;
}

const result = minimumNumber(0, '#HackerRank');
console.log(result);