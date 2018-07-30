let obj = { foo: 123 };
Object.defineProperty(obj, 'test', {
    value: 'test',
    configurable: true,
    writable: true,
    enumerable: true
})
Object.defineProperty(obj, 'test1', {
    set: function(val){
        this.test = val;
    }
})

// obj.test 
// delete obj.test
// obj.test1 = 'asdad'

Object.freeze(obj)
obj.test1 = 'aaaaa'
console.log(Object.getOwnPropertyDescriptors(obj))
