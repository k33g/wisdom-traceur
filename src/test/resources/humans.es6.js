import Human from './human.es6';

class Humans {

    constructor (args) {

        console.log("===Humans Collection Constructor===");

        this.model = Human;
        this.url = "/humans";
    }
}

export default Humans;