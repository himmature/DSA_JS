function Subject() {
    this.observers = [];
}

Subject.prototype.subscribe = function(fn) {
    if(Array.isArray(fn)) {
        this.observers = fn;
    } else {
        this.observers.push(fn);
    }
}

Subject.prototype.unsubscribe = function(fn) {
    this.observers = this.observers.filter(item => item !== fn);
}

Subject.prototype.fire = function() {
    this.observers.forEach(item => {
        item();
    })
}

const subject = new Subject();

const obs1 = () => {
    console.log('obs1 fired');
}

const obs2 = () => {
    console.log('obs2 fired');
}

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.fire();
subject.unsubscribe(obs1);
subject.fire();