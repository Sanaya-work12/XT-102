import Model from '../model/city';

export default class Controller{
    constructor(model){
        this.model = Model;
    }

    add(name){
        this.model.add(name);
    }
    
    remove(index){
        this.model.remove(index);
    }

}