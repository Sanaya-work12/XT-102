class Order {

    constructor(id,name,status,purchaseDate){
        this.id = id;
        this.name = name;
        this.status = status;
        this.purchaseDate = purchaseDate;
    }

}

let orderList = new Array();
orderList.push(new Order('101','Apar','new', '10-2-18'));
orderList.push(new Order('102','Aparajit','processing', '8-2-18'));
orderList.push(new Order('103','Aparajita','completed', '2-2-18')); 
orderList.push(new Order('104','Aparshakti','processing', '9-2-18'));
orderList.push(new Order('105','Parv','completed', '6-2-18'));
orderList.push(new Order('106','Arpit','completed', '5-2-18'));
orderList.push(new Order('107','Arpita','processing', '11-2-18'));
orderList.push(new Order('108','Apurv','new', '12-2-18'));
orderList.push(new Order('109','Apurva','completed', '7-2-18'));
orderList.push(new Order('1010','Apoorva','new', '12-2-18'));
orderList.push(new Order('1011','Akar','completed', '6-2-18'));
orderList.push(new Order('1012','Arth','processing', '10-2-18'));
orderList.push(new Order('1013','Apaar','new', '11-2-18'));
orderList.push(new Order('1014','Aparth','completed', '9-2-18'));

let sortedArray = orderList.filter(function(orderList){
    return orderList.status === 'completed'
});

console.log(sortedArray);