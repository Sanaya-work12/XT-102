var x = new Number(30.5),
    y = new String ('hello'),
    z = new Boolean(true),
    a = null;
let b = {},
    c = function() {};
console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);
console.log(z);
console.log(typeof z);
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);
console.log(c); // use with keyword new
console.log(typeof new c());