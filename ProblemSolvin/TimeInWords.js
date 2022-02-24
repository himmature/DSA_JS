const timeInWords = (h, m) => {
    const zeroToTen = [
        'o\' clock',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten'
    ];
    const elevenToTwenty = [
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
    ];
    const baseDigits = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];
    function getInWord(digit) {
        if(digit == '00') {
            return zeroToTen[0];
        }
        else if(digit <= 10) {
            return zeroToTen[digit]
        } else if(digit >= 11 && digit <= 20) {
            return elevenToTwenty[digit - 11];
        } else {
            let mod = digit%10;
            if(!mod) {
                return baseDigits[digit/10]
            }
            const base = digit - mod;
            return `${baseDigits[base/10]} ${zeroToTen[mod]}`;
        }
    }
    const hours = getInWord(h);
    const hoursPlusOne = getInWord(h + 1);
    const mins = getInWord(m);
    const minsRemaining = getInWord(60 - m);

    if(m == '00') {
        return `${hours} ${mins}`
    } else if(m < 30) {
        if(m === 15) {
            return `quarter past ${hours}`;
        } 
        return `${mins} ${m === 1 ? 'minute' : 'minutes'} past ${hours}`;
    } else if(m === 30) {
        return `half past ${hours}`;
    } else {
        if(m === 45) {
            return `quarter to ${hoursPlusOne}`;
        }
        return `${minsRemaining} minutes to ${hoursPlusOne}`;
    }

}

const result = timeInWords(7, 15);
console.log(result);