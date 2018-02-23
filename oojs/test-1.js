var myfunc = function() {
    'use strict';
    var obj = 'hello';
    console.log('hello');
    for(let x=0;x<10;x++)
    {
        console.log(x);
    }
    return {obj}
}

var ref = myfunc();
console.log(ref.obj);