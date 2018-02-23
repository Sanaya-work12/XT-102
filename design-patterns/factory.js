class Employee{

    constructor(hourly) {
        this.hourly = hourly;
    }

}

class ParttimeEmployee extends Employee {

    constructor(hourly) {
        super(hourly);
    }
    
}

class FulltimeEmployee extends Employee {

    constructor(hourly) {
        super(hourly);
    }
    
}

class TemporaryEmployee extends Employee {
    
    constructor(hourly) {
        super(hourly);
    }
    
}

class EmployeeFactory {

    static createEmployee(type) { //does not want the instance of Employee factory to access this method
        // factory method
        switch(type){
            case 'part':
            return new ParttimeEmployee(500.00);
            break;
            case 'full':
            return new FulltimeEmployee(200.00);
            break;
            case 'temp':
            return new TemporaryEmployee(400.00);
            break;
            default:
            return new ParttimeEmployee(300.00);
            break;
        }
    }
}

let inst = EmployeeFactory.createEmployee('full');
console.log(inst.hourly);