import Model from "./model/model";
import View from "./view/view";
import Controller from "./controller/controller";

(function(){

    let view = new View({
        clearAll: document.querySelector('#clr-button'),
        itemName: document.querySelector('#item-name'),
        calorieAmt: document.querySelector('#calorie-amt'),
        addBtn: document.querySelector('#add-item-button'),
        updateBtn:document.querySelector('#update-data'),
        delBtn:document.querySelector('#delete-data'),
        displayCalTotal: document.querySelector('#display-calories'),
        itemTable: document.querySelector('#items-table')
    })

    let controller = new Controller();
    view.initialize();

}())