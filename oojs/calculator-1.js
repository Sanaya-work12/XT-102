// function are first class objects. so we can use functions to work as function or create a blueprint.
//olo happens in Js (Object Linked Objects)
//declaring calc as class
let Calculator = function (val) {//module-revealing method
    
        let total = val; //properties that can be used by methods of this class
    
        let add = function (newVal) { //with let it becomes a function binded to none and act as 
            total += newVal; //no use of this when you have defined it with let as local variable
        }
        let sub = function (newVal) {
            total -= newVal;
        }
        let mul = function (newVal) {
            total *= newVal;
        }
        let getTotal = function () {
            return total;
        }

        return {
            add:add, //module- revealing
            sub:sub, //use object closures to use private members as public interfaces
            mul:mul, //LHS is the name of the function you can call your function from outside
            getTotal:getTotal//you can decide what methods can be used by public methods
        }

        //literal extensions used in ES6
       /*  return {
            add, //module- revealing
            sub, //use object closures to use private members as public interfaces
            mul, //LHS is the name of the function you can call your function from outside
            getTotal//you can decide what methods can be used by public methods
        } */
    }
    
/*     let ScientificCalculator = function (val) {
        Calculator.call(this, val); //inheritance call.... works as super...
        // only copies the methods from the parent class not bridge the relationship
        let sin = function (newVal) {
            return Math.sin(newVal);
        }
        let cosine = function (newVal) {
            return Math.cos(newVal);
        }
    }
    
    ScientificCalculator.prototype = Calculator.prototype; */ //builds the relationship
    //Now the properties are not bound to objects so we will do it in calculator-1.1.js
    
   let calc = new ScientificCalculator(10);
   //let calc = new Calculator(10);
    calc.add(10);
    calc.sub(5);
    calc.mul(20);
    console.log(calc.getTotal());
    console.log(calc.sin(45));
    console.log(calc.cosine(45));
   console.log(calc instanceof Calculator); //false - beacause the function is returning a closure so the object you 
   //create is a types of closure(object)