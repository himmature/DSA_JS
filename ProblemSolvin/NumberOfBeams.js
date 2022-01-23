/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let beams = 0;
    for(let i = 0; i < bank.length; i++) {
        if(bank[i].indexOf('1') !== -1) {
            let beam1 = 0;
            for(let char of bank[i]) {
                char === '1' && beam1++;
            }
            for(let j = i + 1; j < bank.length; j++) {
                if(bank[j].indexOf('1') !== -1) {
                    let beam2 = 0;
                    for(let char of bank[j]) {
                        char === '1' && beam2++;
                    }
                    beams += beam1 * beam2;
                    break;
                }
            }
        }
    }
    return beams;
};


const bank = ["000","111","000"];
const result = numberOfBeams(bank);
console.log(result);