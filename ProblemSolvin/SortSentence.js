const sortSentence = (s) => {
    const wordArr = s.split(' ');
    console.log(wordArr);
    const result = wordArr.reduce((acc, cv) => {
        let index = +cv[cv.length - 1] - 1;
        acc[index] = cv.substring(0, cv.length - 1);
        return acc;
    }, [])
    return result.join(' ');
}


const s = "Myself2 Me1 I4 and3";
const result = sortSentence(s);
console.log(result);