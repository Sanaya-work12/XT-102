import Observer from "../observer/listener-notify";


class Model{
    constructor(){
        this.streetName;
        this.cityName;
        this.itemChanged = new Observer();
    }
    add(streetName,cityName){
        this.streetName = streetName;
        this.cityName = cityName;
        this.itemChanged.notify(this.streetName,this.cityName);
    }
}

export default new Model();