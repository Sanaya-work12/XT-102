import Observer from "../observer/listenernotify";


export default class Model{
    constructor(){
        this.itemName;
        this.calorieAmt;
        this.total = 0;
        this.itemChanged = new Observer();
    }
    add(itemName,calorieAmt,total){
        this.itemName = itemName;
        this.calorieAmt = calorieAmt;
        this.total += parseInt(this.calorieAmt);
        this.itemChanged.notify(this.itemName,this.calorieAmt,this.total);
    }
    update(itemName,calorie,total) {
        this.itemName = itemName;
        this.calorieAmt = calorieAmt;
        this.total += parseInt(this.calorieAmt);
        this.itemChanged.notify(this.itemName,this.calorieAmt,this.total);
    }
    delete(itemName,calorie,total){
        this.itemName = itemName;
        this.calorieAmt = calorieAmt;
        this.total += parseInt(this.calorieAmt);
        this.itemChanged.notify(this.itemName,this.calorieAmt,this.total);
    }
    clearAll(itemName,calorie,total){
        this.itemName = itemName;
        this.calorieAmt = calorieAmt;
        this.total += parseInt(this.calorieAmt);
        this.itemChanged.notify(this.itemName,this.calorieAmt,this.total);
    }
}
