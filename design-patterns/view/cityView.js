import Model from '../model/city';
import Controller from '../controller/cityCtrl';

export default class View{
    constructor(element){
        this.element = element;
        this.model = Model;
        this.controller = new Controller();
    }

    initialize(){
        this.model.cityAdded.attach((cityList)=>{
            this.render(cityList);
        });
        this.model.cityRemoved.attach((cityList)=>{
            this.render(cityList);
        });
        this.element.addBtn.addEventListener('click',()=>{
            let newCity = prompt('Enter a new City');
            if(newCity){
                this.controller.add(newCity);
            }
        });
        this.element.removeBtn.addEventListener('click',()=>{
            let index = this.element.cityList.options.selectedIndex;
            if(index!=-1){
                this.controller.remove(index);
            }
        });
    }

    render(newCityList){
        this.element.cityList.innerHTML='';
        for(let city of newCityList){
            this.element.cityList.appendChild(new Option(city,city));
        }
    }
}