export default class Observer{
    constructor(){
        this.observers = [];
    }

    attach(cb){
        this.observers.push(cb);
    }
    notify(Street,City){
        this.observers.forEach((cb)=>{cb(Street,City)})
    }
}