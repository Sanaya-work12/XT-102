export default class Observer{
    constructor(){
        this.observers = [];
    }

    attach(cb){
        this.observers.push(cb);
    }
    notify(meal){
        this.observers.forEach((cb)=>{
            cb(meal);
        });
    }
}