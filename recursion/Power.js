const power = (base, exp) => {
    if(exp === 1) return base;
    else if(exp === 0) return 1;
    return base * power(base, exp - 1);
}

const result = power(2,0);
console.log(result);