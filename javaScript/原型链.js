function Person(name) {
    this.name = name;
}
Person.prototype.age = 20;
Person.prototype.award = [];
var jack = new Person('jack');
var rose = new Person('rose');
jack.age++; 
rose.award.push('oscar');
console.log(rose.age);
console.log(jack.award)