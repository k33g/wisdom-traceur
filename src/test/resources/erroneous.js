// greeter.js
class Greeter {
    sayHi(name = 'Anonymous') {
        console.log(`Hi ${name}!`);
    }
}

var greeter = new Greeter();
//broken on purpose
greeter.sayHi(