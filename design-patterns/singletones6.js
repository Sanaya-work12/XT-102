
let instance = null;

let Singleton = class Singleton {
   
    constructor(){
        if(!instance)
            instance = this;
        
        return instance;
    }
    
    static getData(){
        return new Date();
    }
};

module.exports = Singleton;


//console.log(Singleton.getData());

//new Singleton();