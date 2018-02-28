const fs = require('fs');
const readData = (file,cb) =>{
    fs.readFile(file,(error,data)=>{
        if(error){
            return cb(error);
        }
        const data1 = data.toString().trim().split('\r\n')
        cb(null,data1);
    })
}

readData('./file1',(error,data)=>{
    if(error)
    throw err;
    const numbers = data.map(Number);
    const oddNumbers = numbers.filter(number=>number%2 === 1);
    console.log(oddNumbers);
    data.forEach(item => {
        if(item%2 === 0 ){
            console.log(item);
        }
        
    });
    console.log(data)
});