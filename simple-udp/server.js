import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

// Equivalent to TCP's 'data' event.
//
// Since it's connection-less, any client (user) can data to it.
//  -> We can not really say it's all from the same user.
//  -> We use remoteInfo object to know where it's really coming from.
socket.on('message', (message, remoteInfo) => {
  console.log(`Received: ${message} from`, remoteInfo);
});

socket.bind({ address: '127.0.0.1', port: 8080 });

// Could also pass a callback to bind.
// But I'm gonna go with this.
socket.on('listening', () => {
  console.log(`Server listening on ${JSON.stringify(socket.address())}`);
});
