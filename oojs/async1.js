let sort = function(){
    console.log(this.names.sort()); 
    //return sorts;
}

let asyncFunction = function(){
    this.msg = "Hello";
    //let self = this;
    this.names = ['A','D','C'];
   /*  setTimeout(() =>{ //arrow functions retain the binding context
        console.log(this.names.sort()); //the scope of this 'this ' is bound to Timeout method not asyncFunction
    return sorts;
    },1000); */
    setTimeout(() =>{
        sort()},1000);
}

asyncFunction();
console.log('Hello ********');

//starts from line 8