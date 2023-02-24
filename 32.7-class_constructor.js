/**
 * 32-7 (semi-advanced) Class, constructor, method, create object from class
 * In js class called syntatic sugar
 * Follow Hand note for more...
 */

class Instructor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    name;
    age;
    takeEnglishClass(time) {
        console.log(`Please take the class on ${time}`);
    };
    checkResults(marks) {   
        console.log(`${this.name} got =  ${marks}`);
    }
}

const shakib = new Instructor('shakib', 30);
console.log(shakib);
shakib.takeEnglishClass('09.00');
shakib.checkResults(80);

const tamim = new Instructor('tamim', 25);
console.log(tamim);
tamim.takeEnglishClass('12.00');
tamim.checkResults(70);