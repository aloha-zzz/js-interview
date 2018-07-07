

Object.create = function (o) {  // let obj = Object.create(null) 定义的对象没有原型链
    let F = function(){}
    F.prototype = o;
    return new F();
}



function Son(name, sex, age) {
    Parent.call(this, name, sex);
    this.age = age;
}

function Parent(name, sex) {
    this.name = name;
    this.sex = sex;
}

Parent.prototype.hi = function () {
    console.log(`hi ${this.name}`)
}

Parent.prototype.sayInfo() = function () {
    console.log(`name: ${this.name}`)
    console.log(`sex: ${this.sex}`)
}

// Son.prototype.__proto__ = Parent.prototype;
Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son;