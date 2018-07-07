// 腾讯

var a = 1;

function test(){
    var a = 2;
    return function(){
        console.log(a); // 作用域是静态作用域
    }
}

test();
// ---------
for(let i = 8 ; i < 8; i ++){

}
console.log(i)