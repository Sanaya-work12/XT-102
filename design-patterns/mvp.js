import Presenter from './mvp/presenter/cityPresenter';
import View from './mvp/view/cityView';

(function() {

    let view = new View({addBtn: 
        document.querySelector('#addBtn'),
        removeBtn: 
        document.querySelector('#removeBtn'),
        cityList:
        document.querySelector('#cityList')
    });

    let presenter = new Presenter(view);
    presenter.initialize();
}());