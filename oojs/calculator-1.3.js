let Calculator={
    //total:0
}
    Calculator.__proto__={
        
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
}

Object.assign(ScientificCalculator.__proto__,Calculator.__proto__); // target to source available only in ES6
ScientificCalculator.__proto__=
Object.create(Calculator.__proto__);

ScientificCalculator.__proto__={
    sin:function(newVal){
        return Math.sin(newVal);
    },
    cosine:function(newVal){
        return Math.cos(newVal);
    }
}



//let calc=ScientificCalculator;
// let calc1=Object.create
// (ScientificCalculator);
//let calc1=new ScientificCalculator();
//console.log(calc === calc1)

//let calc=new Calculator(10);
ScientificCalculator.total=0;
ScientificCalculator.add(10);
ScientificCalculator.subtract(5);
ScientificCalculator.multiply(20);
console.log(ScientificCalculator.getTotal());
console.log(ScientificCalculator.sin(45));

//console.log(calc instanceof Calculator);