// Reflect 将许多Object方法 放在Reflect上


const map = {
    name: 'zhou'
}

let proxy = new Proxy(map, {
    get: (target, property) => {
        if(property in target) {
            console.log('get')
            return target[property]
        } else {
            throw new Error('aaa')
        }
    },
    set: (target, prop, val) => {
        if(prop === 'age') {
            if(val > 150) {
                throw new Error('age wrong')
            } 
        }
        target[prop] = val
    }

})
// proxy.name;
// proxy.val;
// proxy.age = 100;
// proxy.age = 200
Reflect.set(proxy, 'age', 200)

// console.log(proxy.age);


// // proxy 应用 。 _为私有变量 不可被访问
// const handler = {
//     get (target, key) {
//       invariant(key, 'get');
//       return target[key];
//     },
//     set (target, key, value) {
//       invariant(key, 'set');
//       target[key] = value;
//       return true;
//     }
//   };
//   function invariant (key, action) {
//     if (key[0] === '_') {
//       throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//     }
//   }
//   const target = {};
//   const proxy = new Proxy(target, handler);
//   proxy._prop
//   // Error: Invalid attempt to get private "_prop" property
//   proxy._prop = 'c'