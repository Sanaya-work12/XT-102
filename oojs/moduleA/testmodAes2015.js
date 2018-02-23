let MyApp = MyApp || {};
MyApp.sapient = {};
MyApp.sapient.nitro = {};
MyApp.sapient.nitro = (function (ns){ //es2015 syntax
    'use strict';
    ns.methodA = function(){
        return {
            getDay: function(){
                return new Date().getDay();
            }
        }
    }

    ns.methodB = function(){
        return {
            getMonth: function(){
                return new Date().getMonth();
            }
        }
    }

    return ns;

}(MyApp.sapient.nitro || {})); // or()();

export default MyApp.sapient.nitro