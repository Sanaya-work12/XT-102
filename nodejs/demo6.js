const http = require('http');
const fs = require('fs');

http.createServer().on('request',(req,res)=>{
    switch(req.url){
        case '/api': res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(new Date()));
        break;

        case '/home': 
        case '/about': res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync(`.${req.url}.html`));
        break;

        case '/': res.writeHead(301,{'Location':'/home'});
        res.end();
        break;

        default: res.writeHead(404);
        res.end();
    }

}).listen(8001,()=>console.log('server started on 8001*'));