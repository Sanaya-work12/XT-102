let Singleton = require('./singletones6');

let inst = new Singleton();
let inst1 = new Singleton();
console.log(inst === inst1);
console.log(Singleton.getData());