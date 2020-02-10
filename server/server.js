'use strict';

const net = require('net');
const uuid = require('uuid/v1');

const port = process.env.PORT || 3001;
const server = net.createServer();


// let socketPool = {};

// server.on('connection', (socket) => {
    //   const id = `Socket-${uuid()}`;
    //   socketPool[id] = socket;
    server.on('data', (buffer) => showEvent(buffer));
    server.on('close', () => {
        // delete socketPool[id];
    });
    // });
    
    let showEvent = (buffer) => {
        let text = buffer.toString().trim();
        return text;
};

server.listen(port, () => console.log(`Server up on ${port}`) );
