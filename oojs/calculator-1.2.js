/* let Calculator={
    //total:0
} */
let Calculator ={
    total:0,
        
    add:function(newVal){
        this.total+=newVal;
    },
    subtract:function(newVal){
      this.total-=newVal;
    },
    multiply:function(newVal){
        this.total*=newVal;
    },
    getTotal:function(){
        return  this.total;
    }
}


let ScientificCalculator={
    sin:function(newVal){
        return Math.sin(newVal);
    },
    cosine:function(newVal){
        return Math.cos(newVal);
    }
}
ScientificCalculator.__proto__= Object.create(Calculator);

/* ScientificCalculator.__proto__={
    sin:function(newVal){
        return Math.sin(newVal);
    },
    cosine:function(newVal){
        return Math.cos(newVal);
    }
} */



let calc=ScientificCalculator;
// let calc1=Object.create
// (ScientificCalculator);
//let calc1=new ScientificCalculator();
//console.log(calc === calc1)

//let calc=new Calculator(10);
//ScientificCalculator.total=0;
calc.add(10);
calc.subtract(5);
calc.multiply(20);
console.log(calc.getTotal());
console.log(calc.sin(45));

//console.log(calc instanceof Calculator);