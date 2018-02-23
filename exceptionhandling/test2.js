let add = (x,y) =>{
    if(typeof x !== 'number' || typeof y !== 'number' )
        throw new TypeError('Not a number');
    return x+y;
}
try{
    console.log(add(4,'Hello'));
    console.log(add(4,5));
}catch(e){
    console.log(e);
}