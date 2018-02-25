import Observer from "../observer/listener-notify";

export default class Model{
    constructor(id,meal,calorie){
        this.id = id;
        this.meal = meal; //make properties private using let and then use getters and setters
        this.calorie = calorie;
    }
}