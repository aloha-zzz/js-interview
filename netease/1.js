let line=readline().split(' ');
let a = Number(line[0]);
let b = Number(line[1]);
let c = Number(line[2]);
let max;
let arr = []
arr.push(a + b + c) ;
arr.push(a + b * c) ;
arr.push((a + b) * c) ;
arr.push(a * b + c) ;
arr.push(a * (b + c)) ;
arr.push(a * b * c) ;

max = Math.max.apply(null, arr);
print(max)


