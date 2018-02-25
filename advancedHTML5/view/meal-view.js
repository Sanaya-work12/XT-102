import Controller from "../controller/meal-controller";
import DataStorage from "../storage/meal-storage";
export default class View{
    constructor(elements){
        this.elements = elements;
        this.data = DataStorage;
        this.controller = Controller;
    }
    initialize(){
       
        this.render(this.controller.items);

        this.data.itemChanged.attach((meal) => {this.render(meal)});

        this.elements.addBtn.addEventListener('click',()=>{
            if (this.elements.itemName.value !="" && this.elements.calorieAmt.value !=""){
                if (Number.isInteger(parseInt(this.elements.calorieAmt.value))) {
                    this.controller.addMeal(this.elements.itemName.value,this.elements.calorieAmt.value);
                }
            }
            this.elements.itemName.value='';
            this.elements.calorieAmt.value='';
        });

    }
    render(meal){
        this.elements.displayCalTotal.innerHTML = 'Total Calories : ' + this.controller.totalCalories;
        let mealInfo = this.data.getMeals();
        mealInfo.forEach(item => {
            let editBtn = document.createElement('button');
            let tRow = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            editBtn.innerHTML = 'Edit';
            td1.innerHTML = item.meal;
            td2.innerHTML = item.calorie;
            td3.appendChild(editBtn);
            tRow.appendChild(td1);
            tRow.appendChild(td2);
            tRow.appendChild(td3);
            this.elements.itemTable.appendChild(tRow);
        });
    }
}