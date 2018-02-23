export default class Observer{
    constructor(observers){
        this.observers = [];
    }

    attach(cb){
        this.observers.push(cb);
    }

    notify(newCity){
        this.observers.forEach((cb)=>{ //used to call for async functions or updations
            cb(newCity);
        });
    }
}