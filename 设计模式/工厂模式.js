function createGirl(name, age, height, weight) {
    function girl(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.say = function () {
            console.log('嘤嘤嘤');
        }
    }
    return new girl(name, age, height, weight)
 
}

let vicky = createGirl('vicky', 21, 173, 110);

vicky.say()