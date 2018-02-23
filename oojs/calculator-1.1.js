// function are first class objects. so we can use functions to work as function or create a blueprint.

//declaring calc as class
let Calculator = function (val) {//module-revealing method
    this.total = val;
}

Calculator.prototype = {

    add:function (newVal) { //with let it becomes a function binded to none and act as 
        this.total += newVal; //no use of this when you have defined it with let as local variable
    },
    sub:function (newVal) { 
        this.total -= newVal; 
    },
    mul:function (newVal) {  
        this.total *= newVal; 
    },
    getTotal:function (newVal) { 
        return this.total; 
    },
}

let ScientificCalculator = function (val) {
    Calculator.call(this, val); //inheritance call.... works as super...
    // only copies the methods from the parent class not bridge the relationship
    this.sin = function (newVal) {
        return Math.sin(newVal);
    }
    this.cosine = function (newVal) {
        return Math.cos(newVal);
    }
}
    
ScientificCalculator.prototype = Calculator.prototype;
//Object.create(Calculator.prototype); //Object.create----creates new Object instead of
//using new keyword because now we need not use '{}' style

let calc = new ScientificCalculator(10);
//let calc = new Calculator(10);
calc.add(10);
calc.sub(5);
calc.mul(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc.cosine(45));
console.log(calc instanceof Calculator);