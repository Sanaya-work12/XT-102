import Model from './model/city';
import View from './view/cityView';
import Controller from './controller/cityCtrl';

(function() {

    let view = new View({addBtn: 
        document.querySelector('#addBtn'),
        removeBtn: 
        document.querySelector('#removeBtn'),
        cityList:
        document.querySelector('#cityList')
    });
    let controller = new Controller();
    view.initialize();
}());