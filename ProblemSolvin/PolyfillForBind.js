Function.prototype.myBind = function (context, ...args) {
    return function () {
        console.log('this', this);
    }
}

let greet = function() {
    return `${this.firstName} ${this.lastName}`;
}

let person = {
    firstName: 'jack',
    lastName: 'ryan'
}

let newGreet = greet.myBind(person);

console.log(newGreet());