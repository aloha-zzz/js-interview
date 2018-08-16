var a = 1;
function run() {
    var a = 2;
    return function(){
        var a=3
        console.log(a)
    }
}

run()()