import Controller from "../controller/meal-controller";
import DataStorage from "../storage/meal-storage";
export default class View{
    constructor(elements){
        this.elements = elements;
        this.data = DataStorage;
        this.controller = Controller;
        this.targetId;
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

        this.elements.clearAll.addEventListener('click', function() {
            this.controller.clearMeal();
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
            editBtn.setAttribute.id = item.id;
            editBtn.innerHTML = 'Edit';
            td1.innerHTML = item.meal;
            td2.innerHTML = item.calorie;
            td3.appendChild(editBtn);
            tRow.appendChild(td1);
            tRow.appendChild(td2);
            tRow.appendChild(td3);
            this.elements.itemTable.appendChild(tRow);

            let that = this;
            editBtn.addEventListener('click',function (event) {
                that.targetId = event.currentTarget.id;
                that.elements.addBtn.classList.add('hide');
                that.elements.updateBtn.classList.remove('hide');
                that.elements.delBtn.classList.remove('hide');
                that.elements.itemName.value = item.meal;
                that.elements.calorieAmt.value = item.calorie;
            });

            this.elements.updateBtn.addEventListener('click', function() {
                that.controller.updateMeal(that.targetId,that.elements.itemName.value,that.elements.calorieAmt.value);
                that.elements.addBtn.classList.remove('hide');
                that.elements.updateBtn.classList.add('hide');
                that.elements.delBtn.classList.add('hide');
                that.elements.itemName.value = '';
                that.elements.calorieAmt.value = '';
            });
    
            this.elements.delBtn.addEventListener('click', function() {
                that.controller.removeMeal(that.targetId);
                that.elements.addBtn.classList.remove('hide');
                that.elements.updateBtn.classList.add('hide');
                that.elements.delBtn.classList.add('hide');
                that.elements.itemName.value = '';
                that.elements.calorieAmt.value = '';
            });
    
        });

    }
}