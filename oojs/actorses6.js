
//same function can be used to describe the functionality and also it can be used for encapsulation

class Actor{

    //instance variables 
    constructor(age,height,name) {
        this.age=age;
        this.height=height;
        this.name=name; //properties that can be used by methods of this class

    }
    
    //methods
    dance(){
        console.log('Actor '+this.name+' is dancing');
    } 
    act(){
       console.log('Actor '+this.name+' is acting');
    } 
}

let shahrukhkhan = new Actor(52,173,'Shahrukh Khan');//creating object
shahrukhkhan.act(); //calling methods
shahrukhkhan.dance(); //calling methods