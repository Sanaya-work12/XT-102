let i=100;
let intervalId = 0,
    response = {'message' : '', 'root':0};

let taskHandler = function(event){ //message event
    
    if(event.data === 'start') {
        try{
            intervalId = setInterval (()=> {
                response.root = Math.sqrt(i);
                postMessage(JSON.stringify(response));
                i++;
            },10);
        }
        catch(error){
            clearInterval(intervalId);
            postMessage(error.message);
        }
        
    }
    else if (event.data === 'pause') {
        clearInterval(intervalId);
    }
}

addEventListener('message',taskHandler,false);