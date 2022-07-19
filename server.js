import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 4000});

wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        console.log(msg);
    });
    ws.on('close', function close() {
        console.log('disconnected');
    });
    ws.send('init message to client prayuth');
    setInterval(() => {
        const data = {
          posX: Math.floor((Math.random() * 800) + 1),
          posY: Math.floor((Math.random() * 600) + 1)
        }
        console.log('sending to data to client:', data);
        ws.send(JSON.stringify(data));
      }, 100);
});

