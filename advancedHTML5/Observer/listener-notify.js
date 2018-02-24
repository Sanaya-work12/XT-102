export default class Observer{
    constructor(){
        this.observers = [];
    }

    attach(cb){
        this.observers.push(cb);
    }
    notify(id,meal,calorie){
        this.observers.forEach((cb)=>{cb(id,meal,calorie)
        });
    }
}