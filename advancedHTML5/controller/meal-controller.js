import DataStorage from '../storage/meal-storage';
import Model from '../model/meal';
import Observer from '../observer/listener-notify';
class MealController{

    constructor(){
        this.items = DataStorage.getMeals();
        this.currentMeal = null;
        this.totalCalories = 0; 
    }

    addMeal(name,calorie) {
        let id;
        this.totalCalories = this.totalCalories + parseInt(calorie);
        if(this.items.length>0){
            id = this.items[this.items.length-1].id + 1;
        }
        else {
            id = 0;
        }
        let newMeal = new Model(id,name,calorie);
        this.items.push(JSON.stringify(newMeal));
        DataStorage.storeMeal(newMeal);
        return newMeal;
    }

    updateMeal(id,name,calorie) {
        this.items.forEach((item) => {
            if(item.id === id)
                this.totalCalories = this.totalCalories - item.calorie;
        });
        let newMeal = new Model(id,name,calorie);
        DataStorage.updateMeal(newMeal);
        this.totalCalories = this.totalCalories + parseInt(calorie);
    }

    removeMeal(id) {
        this.items.forEach((item)=>{
            this.items.forEach((item) => {
                if(item.id === id)
                    this.totalCalories = this.totalCalories - parseInt(item.calorie);
            });
            if(item.id === id){
                DataStorage.removeMeal(item);
            }
        });
    }

    clearMeal(){
            DataStorage.clearMeal();
    }

   /*  displayMeal() {
        if(this.items.length > 0)
        {
            this.items.forEach((meal) => {
                return { name: meal.meal,
                        calorie: meal.calorie };
            });
        }
        else {
            return { name: '',
                     calorie: '' };
        }
    } */

}
export default new MealController();