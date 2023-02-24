/**
 * 32-8 (advanced) Inheritance, extends class, super, class method
 */

class Father {
    constructor(n, v) {
        this.name = n;
        this.village = v;
    }
    name;
    village;
    giveFeedback() {
        console.log('Alhamdulillah');
    }
    giveRating(value) {
        console.log(`${this.name} gives ${value}`);
    }
}

class Son extends Father {
    constructor(n, v) {
        super(n, v);
    }

    giveRating(value) {
        console.log(`${this.name} gives ${value}`);
    }
}

const father = new Father('father', 'London');
console.log(father);
father.giveRating('5star');

const son = new Son('son', 'London');
console.log(son);
son.giveFeedback();
son.giveRating('4star');