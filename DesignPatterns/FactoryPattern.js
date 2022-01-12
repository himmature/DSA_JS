function GreetFactory(lang) {
    function greetEnglish(name) {
        console.log('hello, ' + name);
    }

    function greetSpanish(name) {
        console.log('hola, ' + name);
    }
    this.getFactory = function(name) {
        if(lang === 'en') {
            greetEnglish(name);
        } else if(lang === 'esp') {
            greetSpanish(name);
        }
    }
}

let userName = 'Jack';

let enFactory = new GreetFactory('en');
let spFactory = new GreetFactory('esp');

enFactory.getFactory(userName);