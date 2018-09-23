// injector
// APP Instance -- Global & Singleton
var injector = {
    set: function(name, factory) {
        // name: the dependency name
        // factory: can be a factory function
        //          or just a value
    },
    get: function(name) {}
};

// a.js
injector.set('env', 'dev');

// b.js
injector.set('b', function() {
    return {
        sayYes: function() {
            console.log('Yes!');
        },
        sayNo: function() {
            console.log('No!');
        }
    };
});

// c.js
injector.set('c', function(env, b) {
    if (env === 'dev') {
        b.sayYes();
    } else {
        b.sayNo();
    }
});