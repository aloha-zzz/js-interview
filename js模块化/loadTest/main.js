var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;



// import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4