//require js which uses AMD
//const iife = require('./moduleA/testmodA');

//ES2015 syntax
import iife from './moduleA/testmodAes2015';

console.log(iife.methodA().getDay());
console.log(iife.methodB().getMonth());