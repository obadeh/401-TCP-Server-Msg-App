/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

const net = require('net');
const client = new net.Socket();

client.connect(3001, 'localhost', () => {});

client.on('data', (data) => {

  // console.log('data : ', data);
  let event = JSON.parse(data);

  console.log(new Date().toUTCString(), event);
});

client.on('close', () => {
  console.log('connection closed...');
});
