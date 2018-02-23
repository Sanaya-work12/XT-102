const {Customer,Order} = require('./moduleA/customer');

//let customer = new Customer(1, 'Apaar');
let order = new Order(2,'Order1');
console.log('Customer Details: ' + Customer);
console.log('Order Details: ' + order);