import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

socket.send('Some text from sender', 8080, '127.0.0.1', (err, bytes) => {
  console.log({ err, bytes });
});
