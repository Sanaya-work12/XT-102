const fs = require('fs');
const EventEmitter = require('events');
class ReadFile extends EventEmitter{

    constructor(){
        super();
    }

    readData(asyncFunc,...fileargs){
        asyncFunc(...fileargs,(error,data)=>{
            this.emit('start'); // this refers to readfile class
            if(error){
                return this.emit('error',error);
            }
            const data1 = data.toString().trim().split('\r\n');
            this.emit('data',data1);
            this.emit('done','completed');
        })
    }
}

let eventEmitter = new ReadFile();
eventEmitter.readData(fs.readFile,'file1','UTF-8');
eventEmitter.on('start',() => console.log('Started'));

eventEmitter.on('data',(contents) => console.log('Recieving Data '+contents));

eventEmitter.on('error',(err) => console.error(err));

eventEmitter.on('done',(msg) => console.log('Done: '+msg));

console.log("I'm first")