const order = {
    email:'abc@xyz.com'
}
try{
    //reference error
   // myFunction();
   //type error
   //null.myFunction();
    //syntax error
    //eval('Hello Someone');
    //
    console.log(order.name);
    if(!order.name)
    throw new SyntaxError('Order has no name');
}catch(e){
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
}
finally{
    console.log('Inside finally');
}

console.log('Hello');