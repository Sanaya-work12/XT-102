import DataStorage from '../storage/meal-storage';
import Model from '../model/meal';
class MealController{

    constructor(){
        this.items = DataStorage.getMeals();
        this.currentMeal = null;
        this.totalCalories = 0; 
    }

    addMeal(name,calorie) {
        let id;
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
        let newMeal = new Model(id,name,calorie);
        DataStorage.updateMeal(newMeal);
    }

    removeMeal(id) {
        this.items.forEach((item)=>{
            if(item.id === id){
                DataStorage.removeMeal(item);
            }
        });
    }
}
export default new MealController();