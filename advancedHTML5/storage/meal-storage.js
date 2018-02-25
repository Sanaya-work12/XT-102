import Observer from "../observer/listener-notify";

class DataStorage{

    constructor(){
        this.itemChanged = new Observer();
    }

    storeMeal(meal){
        let items;
        if(localStorage.getItem('meals') === null){
            items = [];
            items.push(meal);
            localStorage.setItem('meals',JSON.stringify(items));
        }
        else {
            items = JSON.parse(localStorage.getItem('meals'));
            items.push(meal);
            localStorage.setItem('meals',JSON.stringify(items));
        }

        this.itemChanged.notify(meal);
    }

    getMeals(){
        let items;
        if(localStorage.getItem('meals') === null){
            items = [];
        }
        else {
        items = JSON.parse(localStorage.getItem('meals'));
        }
        return items;
    }

    updateMeal(meal){
        let meals = JSON.parse(localStorage.getItem('meals'));
        meals.forEach((existingMeal)=> {
        if(existingMeal.id === meal.id){
            Object.assign(existingMeal,meal);
            localStorage.setItem('meals',JSON.stringify(meals));
        }
        });
        this.itemChanged.notify(meal);
    } 

    removeMeal(meal){
        let meals=JSON.parse(localStorage.getItem('meals'));
        const ids=  meals.map((item)=>{return item.id;});
        meals.forEach((existingmeal)=>{
            if(existingmeal.id===meal.id){
                meals.splice(ids.indexOf(meal.id),1)
            }
            localStorage.setItem('meals',JSON.stringify(meals));
        });
        this.itemChanged.notify(meal);
    }    

}

export default new DataStorage();