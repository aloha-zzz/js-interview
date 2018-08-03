
var arr = [func1, func2, func3];
function func1(ctx, next) {
      ctx.index++
      next();
}
function func2(ctx, next) {
      setTimeout(function () {
        ctx.index++
        next();
      });
}
function func3(ctx, next) {
      console.log(ctx.index);
}

compose(arr)({ index: 0 });

// out: 2


function compose(arr) {
    let len = arr.length;
    return function (ctx) {
        (function run(ctx, i) {
            if (i === len) {
                return;
            }
            let func = arr.shift();
            func(ctx, function next(){
                run(ctx, i + 1)
            })
        })(ctx, 0)
    }
}