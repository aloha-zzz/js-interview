//   JavaScript 的可执行代码(executable code)的类型 全局代码、函数代码、eval代码。



// EC：函数执行环境（或执行上下文），Execution Context

// ECS：执行环境栈，Execution Context Stack

// VO：变量对象，Variable Object

// AO：活动对象，Active Object

// scope chain：作用域链

// 全局代码不包括任何function体内的代码
// EC（执行上下文）

// EC 执行上下文创建 

// ECObj: {
//     scopeChain: { /* 变量对象（variableObject）+ 所有父级执行上下文的变量对象*/ }, 
//     variableObject: { /*函数 arguments/参数，内部变量和函数声明 */ }, 
//    this: {} 
// }


//1、查找调用函数的代码。

// 2、执行代码之前，先进入创建上下文阶段：

// 初始化作用域链

// 创建变量对象：

// 创建arguments对象，检查上下文，初始化参数名称和值并创建引用的复制。

// 扫描上下文的函数声明（而非函数表达式）：

// 为发现的每一个函数，在变量对象上创建一个属性——确切的说是函数的名字——其有一个指向函数在内存中的引用。

// 如果函数的名字已经存在，引用指针将被重写。

// 扫描上下文的变量声明：

// 为发现的每个变量声明，在变量对象上创建一个属性——就是变量的名字，并且将变量的值初始化为undefined

// 如果变量的名字已经在变量对象里存在，将不会进行任何操作并继续扫描。

// 求出上下文内部“this”的值。

// 3、激活/代码执行阶段：

// 在当前上下文上运行/解释函数代码，并随着代码一行行执行指派变量的值。

let stack = [];

stack.push('global');
stack.push('func'); //函数调用栈