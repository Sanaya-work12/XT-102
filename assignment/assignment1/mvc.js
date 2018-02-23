import Model from "./model/city";
import View from "./view/city-view";
import Controller from "./controller/city-ctrl";

(function(){

    //let model = Model;
    let view = new View({streetName:document.querySelector('#street-name'),streetShip:document.querySelector('#street-ship'),
    checkBox:document.querySelector('#check-box'),
    cityName:document.querySelector('#city'),cityShip:document.querySelector('#city-ship')})

    //let controller = new Controller();
    view.initialize();

}())