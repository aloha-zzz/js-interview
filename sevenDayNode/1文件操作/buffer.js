let str = 'hello';
let buffer = Buffer.from(str);
let temp =  Buffer.alloc(buffer.length)

// Buffer.from() 内容
// Buffer.alloc()  分配内部空间 初始为0
// Buffer.allocUnsafe()  分配内存空间 未初始化

buffer.copy(temp)
let bin = buffer.slice(2);
console.log(str);
console.log(buffer)
console.log(bin.toString())
console.log(temp)