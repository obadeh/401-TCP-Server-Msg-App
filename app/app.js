'use strict';
const net = require('net');
const client = new net.Socket();
client.connect(3001, 'localhost', () => {});

// const EE = require('events')

// const events = new EE()
const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }

    client.write('hello');

    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });

};

let file = process.argv.slice(2).shift();
alterFile(file);


