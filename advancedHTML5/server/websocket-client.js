export default class WebSocketClient{

    constructor(){
        this.ws=new WebSocket('ws://localhost:8080');//does the browser identifies websocket protocol initial handshake is done using http and then protocol upgrade request is sent for ws and then from half duplex... full duplex comm. happens.
    }

    connect(){
        document.querySelector('form').addEventListener('submit',()=>{
            let name = document.querySelector('#name').value,
                message = document.querySelector('#message').value;
            this.ws.send(JSON.stringify({name:name,message:message}));//posts a message to the server
            return false; //prevent default fom submission.... or use preventDefault();
        });

        this.ws.onmessage = (event) => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(event.data));
            document.querySelector('#messages').appendChild(li);
        }

        this.ws.onerror = (event) => {
            let li = document.createElement('li'),
                span = document.createElement('span');
            span.appendChild('Error' + event.data);
            li.appendChild(span);
            document.querySelector('#messages').appendChild(li);
        }

    }

}