import Observer from "../../assignment/assignment1/observer/listener-notify";

export default class Model{
    constructor(id,meal,calorie){
        this.id = id;
        this.meal = meal; //make properties private using let and then use getters and setters
        this.calorie = calorie;
        this.itemAdded = new Observer();
        this.itemChanged = new Observer();
        this.itemRemoved = new Observer();
    }

    add(id,meal,calorie){
        this.itemAdded.notify(this.id,this.meal,this.calorie);
    }

    update(id,meal,calorie){
        this.itemChanged.notify(this.id,this.meal,this.calorie);
    }

    remove(id,meal,calorie){
        this.itemRemoved.notify(this.id,this.meal,this.calorie);
    }

}