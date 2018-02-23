import Model from "../model/model";

export default class Controller{
    constructor(){
        this.model = Model;
    }
    add(item,cal){
        this.model.add(item,cal,total);
    }

    update(item,cal){
        this.model.update(item,cal,total);
    }
}