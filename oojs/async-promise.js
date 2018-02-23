let asyncFunction = function(){
    this.msg = "Hello";
    //let self = this;
    this.names = ['A','D','C'];
    let prom = new Promise(function(resolve, reject){ //promise refers pending result
    setTimeout(() =>{
        resolve(this.names.sort())},1000)
    });
    return prom;
}

asyncFunction().then(function(sortedValues){
    console.log(sortedValues);
});
console.log('Hello ********');

//starts from line 8