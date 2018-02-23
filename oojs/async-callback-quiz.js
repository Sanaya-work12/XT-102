// let myfunc = function (msg) {
//     for (let i = 0; i < 10; i++) //for(var i=0;i<10;i++)
//     {
//         setTimeout(function (msg) {
//             console.log(i + ' ' + msg);
//         }.bind(this, msg), 1000) //bind is a design pattern to maintain context refrence
//     }
// }

// myfunc('Hello');
// console.log('I am executed first');

//var is a function scope
//let is a block scope

//---------------------------assignment-----------------------------------

let add = function (num1,num2,callback){
    this.num1=num1;
    this.num2=num2;
    let result;
    result = num1+num2;
    callback(result);
}

// let callback = function (result){
//     console.log(result)
// }
// add(3,5,callback);
add(3,5,(result)=>console.log(result));
