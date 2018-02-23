import Model from "../model/city";

export default class Controller{
    constructor(){
        this.model = Model;
    }
    add(street,city){
        this.model.add(street,city);
    }
}