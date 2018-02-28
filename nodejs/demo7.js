const { Readable } = require('stream');



const inStream = new Readable({
  read(size) {
    // setTimeout(() => {
    //   if (this.currentCharCode > 90) {
    //     this.push(null);
    //     return;
    //   }
    //   this.push(String.fromCharCode(this.currentCharCode++));
    // }, 2000);
    var t = setInterval(() => {
        if (this.currentCharCode > 90) {
          this.push(null);
          return;
        }
        //this.push(String.fromCharCode(this.currentCharCode++));
      }, 2000);
  }
});

inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

process.on('exit', () => {
  console.error(
    `\n\ncurrentCharCode is ${inStream.currentCharCode}`
  );
});
process.stdout.on('error', process.exit);
