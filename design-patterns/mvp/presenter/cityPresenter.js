import Model from '../mvp/model/city';
import View from '../mvp/view/cityView';
export default class Presenter{
    constructor(view){
        this.model=Model;
        this.view= view;
    }

    initialize(){
        this.model.cityAdded.attach((cityList)=>{
            this.render(cityList)
        })
        this.model.cityRemoved.attach((cityList)=>{
            this.render(cityList)
        })

this.view.elements.addBtn.addEventListener('click',()=>{
    let newCity=prompt('Enter a New City');
    if(newCity){
        this.model.add(newCity)
    }
})
this.view.elements.removeBtn.addEventListener('click',()=>{
    let index=
    this.view.elements.cityList.options.selectedIndex;
    if(index!=-1){
        this.model.remove(index);
    }
})

    }
    render(newCityList){
        this.view.elements.cityList.innerHTML='';
        for(let city of newCityList){
    this.elements.cityList.appendChild
    (new Option(city,city))
        }
    }
    

}