/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length >= this.maxSize) return;
    this.stack.push(x);
    return this.stack;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length) {
        return this.stack.pop();
    } else {
        return -1;
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let limit;
    if(k > this.stack.length) {
        limit = this.stack.length;
    } else {
        limit = k;
    }
    for(let i = 0; i < limit; i++) {
        this.stack[i] += val;
    }
};
let customStack = new CustomStack(3); // Stack is Empty []
