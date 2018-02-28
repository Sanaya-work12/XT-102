import { resolve } from 'path';

const fs = require('fs');
const readData = (file)=>{
    return new Promise((resolve,reject)=>{
        fs.readData(file,(error,data)=>{
            if(error){
                reject(error);
            }
            const data1 = data.toString().trim().split('\r\n')
            resolve(data1);
        })
    })
}


readData('./file1').then((data)=>{
    const numbers = data.map(Number);
    const oddNumbers = numbers.filter(number=>number%2 === 1);
    console.log(oddNumbers);
    data.forEach(item => {
        if(item%2 === 0 ){
            console.log(item);
        }
        
    });
    console.log(data)
}).catch((error)=>{
    console.log(error);
});