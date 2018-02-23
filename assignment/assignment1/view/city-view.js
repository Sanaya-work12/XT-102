import Model from "../model/city";
import Controller from "../controller/city-ctrl";

export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();
    }
    initialize(){
        this.model.itemChanged.attach((streetName,cityName)=>{this.render(streetName,cityName)})

        this.elements.checkBox.addEventListener('change',()=>{
            if(this.elements.streetName.value !="" && this.elements.cityName.value !="" && this.elements.checkBox.checked){
                this.controller.add(this.elements.streetName.value,this.elements.cityName.value);
            }
        })
    }
    render(newStreet,newCity){
        this.elements.streetShip.value="";
        this.elements.cityShip.value="";
        this.elements.streetShip.value=newStreet;
        this.elements.cityShip.value=newCity;

    }
}