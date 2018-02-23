class Calculator{

    constructor(val){
        this.total=val; //properties that can be used by methods of this class
    }

    add(newVal){
        this.total+=newVal;
        } 
    sub(newVal){
        this.total-=newVal;
    } 
    mul(newVal){
        this.total*=newVal;
    }
    getTotal(){
        return this.total;
    } 
}

class ScientificCalculator extends Calculator {
    constructor(val){
        super(val);
    }
    sin(newVal) {
        return Math.sin(newVal);
    }
    cosine(newVal) {
        return Math.cos(newVal);
    }
}

let calc = new ScientificCalculator(10);
calc.add(10);
calc.sub(5);
calc.mul(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc.cosine(45));
console.log(typeof Calculator);//function
console.log(calc instanceof Calculator);
console.log(calc instanceof Object); //true