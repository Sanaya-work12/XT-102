export default class Observer{
    constructor(){
        this.observers = [];
    }

    attach(cb){
        this.observers.push(cb);
    }
    notify(item,cal,t){
        this.observers.forEach((cb)=>{cb(item,cal,t)})
    }
}