function hello(name) {
    name += 'hello';
    console.log('hello' + name);
}

function good(name) {
    name += 'hello';
    console.log('good' + name);
}
good('vicky')
good('hello')

function HOC(func) {
    return function (name) {
        name += 'hello'; // 相同的业务逻辑
        func(name);
    }
}

function test1(name) {
    console.log('test1' + name);
}
function test2(name) {
    console.log('test2' + name);
}
let func1 = HOC(test1);
let func2 = HOC(test2);

func1('vicky')
func2('vicky')



