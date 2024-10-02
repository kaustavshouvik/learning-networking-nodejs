import net from 'node:net';

const socket = net.createConnection(
  {
    host: '127.0.0.1',
    port: '8080',
  },

  // -> 'soket' here is also a duplex stream.

  () => {
    socket.write('Simple message, from sender');
  }
);
