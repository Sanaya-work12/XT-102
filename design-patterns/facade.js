class Bank{
    verify(name,amount){
        return true;
    }
}

class CreditScore{
    get(name){
        return true;
    }
}

class Background{
    check(name){
        return true;
    }
}

class PersonalLoan{
    constructor(name){
        this.name = name;
    }

    applyFor(amount){ //facade hides subsystems
        let result = 'approved';
        if(!new Bank().verify(this.name,amount)){
            result = 'denied';
        }
        else if(!new CreditScore().get(this.name)){
            result = 'denied';
        }
        else if(!new Background().check(this.name)){
            result = 'denied';
        }
        return result;
    }
}

let loan = new PersonalLoan('ABCD');
console.log(loan.applyFor(75000.00));

