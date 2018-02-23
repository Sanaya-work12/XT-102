//ES5

/* var calc = function (opt,num1,num2) {
    var result;

    switch(opt)
    {
         case 'add':
        {
             result = num1+num2;
            break;
        }
        case 'sub':
        {
            if(num1>num2)
             result = num1-num2;
             else
             result = num2-num1;
            break;
        }
        case 'mul':
        {
             result = num1*num2;
            break;
        }
        default:
        {
            console.log('Please enter a valid oeration');
        }
    }
    
    return {result};
}

var ref = calc('sub',3,4); //pass words as strings and create cases according to expression data type
console.log(ref.result); */

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function are first class objects. so we can use functions to work as function or create a blueprint.

//declaring calc as class
let Calculator = function (val) {

    this.total = val; //properties that can be used by methods of this class

    this.add = function (newVal) {
        this.total += newVal;
    }
    this.sub = function (newVal) {
        this.total -= newVal;
    }
    this.mul = function (newVal) {
        this.total *= newVal;
    }
    this.getTotal = function () {
        return this.total;
    }
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

ScientificCalculator.prototype = Calculator.prototype; //builds the relationship

let calc = new ScientificCalculator(10);
calc.add(10);
calc.sub(5);
calc.mul(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc.cosine(45));
console.log(calc instanceof Calculator);