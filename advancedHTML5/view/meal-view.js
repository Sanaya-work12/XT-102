import Model from "../model/model";
import Controller from "../controller/controller";

export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = new Model();
        this.controller = new Controller();
    }
    initialize(){
        this.model.itemAdded.attach((id,meal,calories)=>{this.render(id,meal,calories)})
        this.model.itemChanged.attach((id,meal,calories)=>{this.render(id,meal,calories)})
        this.model.itemRemoved.attach((id,meal,calories)=>{this.render(id,meal,calories)})

        this.elements.addBtn.addEventListener('click',()=>{
            if (this.elements.itemName.value !="" && this.elements.calorieAmt.value !=""){
                if (Number.isInteger(parseInt(this.elements.calorieAmt.value))) {
                    this.controller.addMeal(this.elements.itemName.value,this.elements.calorieAmt.value);
                    this.elements.itemName.value='';
                    this.elements.calorieAmt.value='';
                }
            }
        });
    }
    render(itemName,calorieAmt,total){
        this.model.total=total;
        this.elements.displayCalTotal.innerHTML = 'Total Calories : ' + total;
        let editBtn = document.createElement('button');
        let tRow = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        editBtn.innerHTML = 'Edit';
        td1.innerHTML = itemName;
        td2.innerHTML = calorieAmt;
        td3.appendChild(editBtn);
        tRow.appendChild(td1);
        tRow.appendChild(td2);
        tRow.appendChild(td3);
        this.elements.itemTable.appendChild(tRow);

        let that = this;

        editBtn.addEventListener('click',function(event) {
            that.elements.addBtn.classList.add('hide');
            that.elements.updateBtn.classList.remove('hide');
            that.elements.delBtn.classList.remove('hide');
            that.elements.itemName.value = event.currentTarget.parentElement.previousSibling.previousSibling.innerHTML;
            that.elements.calorieAmt.value = event.currentTarget.parentElement.previousSibling.innerHTML;
            that.model.total = that.model.total - event.currentTarget.parentElement.previousSibling.innerHTML;
            that.elements.displayCalTotal.innerHTML = 'Total Calories : ' + that.model.total;
            event.currentTarget.parentElement.parentElement.remove();
        });

        this.elements.updateBtn.addEventListener('click',function(event) {
            //that.model.itemChanged.attach((itemName,calorieAmt,total)=>{that.render(itemName,calorieAmt,total)})
            if (that.elements.itemName.value !="" && that.elements.calorieAmt.value !=""){
                if (Number.isInteger(parseInt(that.elements.calorieAmt.value))) {
                    that.controller.add(that.elements.itemName.value,that.elements.calorieAmt.value);
                    that.elements.itemName.value='';
                    that.elements.calorieAmt.value='';
                }
            }
            that.elements.addBtn.classList.remove('hide');
            that.elements.updateBtn.classList.add('hide');
            that.elements.delBtn.classList.add('hide');
        });

        this.elements.delBtn.addEventListener('click',function() {
            that.elements.itemName.value = '';
            that.elements.calorieAmt.value = '';
            that.elements.addBtn.classList.remove('hide');
            that.elements.updateBtn.classList.add('hide');
            that.elements.delBtn.classList.add('hide');
            
        });

        this.elements.clearAll.addEventListener('click', function(){
            that.elements.itemTable.remove();
            that.model.total = 0;
            that.elements.displayCalTotal.innerHTML = 'Total Calories';
        });
        
    }
}