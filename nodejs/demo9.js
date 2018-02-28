const { Transform } = require('stream');

const inoutStream = new Transform({
    transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase());
        cb();
    }
});

process.stdin.pipe(inoutStream).pipe(process.stdout);