const EventEmitter = require('events');

class Inc extends EventEmitter{
    constructor(){
        super();
    }

    inc(counter){

            setTimeout(()=>{
            this.emit('start');
            for(let i=0;i<counter;i++)
            {
                this.emit('incremented',i);
            }
            this.emit('done')},2000);
            // var count =0;
            // this.emit('start');
            // var t= setInterval(()=>{
            //     this.emit('data',++count);
            //     if(count===counter){
            //         this.emit('done',count);
            //         clearInterval(t);
            //     }
            // },10)
    }
}

const num = new Inc();
num.inc(20);
num.on('start',()=>console.log('Started'));
num.on('incremented',(value)=>console.log(value));
num.on('done',()=>console.log('completed'));