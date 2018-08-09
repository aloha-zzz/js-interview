//中学生
function MidStu(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        window.alert(this.name + " " + this.age);
    }

    //计算学费
    this.payFee = function (money) {
        window.alert("应缴" + money * 0.8);
    }
}

//小学生
function Pupil(name, age) {
    MidStu.call(this, name, age)


    //计算学费
    this.payFee = function (money) { // 重写
        window.alert("应缴" + money * 0.5);
    }
}
