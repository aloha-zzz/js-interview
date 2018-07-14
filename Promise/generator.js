function* helloWorldGenerator() {
    yield '1';
    yield '2';
    yield '3';
    yield '4';
    yield '5';
    return 'ending';
  }
  

// console.log(hw.next())

/**
 * generator.next() 返回对应yield 后的值
 * next() 参数为空 yield 返回值为undefined
 * 
 * next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解
 * 它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。
 * 
 *  yield next()  传入的参数作为上一个yield的返回值
 * next 不传参数， yield表达式返回值一直是undefined
 * 
 * 
 * 调用 Generator 函数，会返回一个内部指针（即遍历器) 
 * g.next(参数)
 * g.return
 * g.throw
 */ 
 
function *f(){
    for(let i = 0; i < 5; i++) {

    }
}




function run(gen){
    let temp = gen();

    function go(iter){
        let ans = temp.next()
        console.log(ans)
        if(ans.done === false) {
            go(iter)
        }
       
    }
    go(temp)
}

run(helloWorldGenerator)