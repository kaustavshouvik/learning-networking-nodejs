import net from 'node:net';

const server = net.createServer((socket) => {
  // -> 'socket' is a duplex stream.

  socket.on('data', (data) => {
    console.log(data.toString('utf8'));
  });
});

server.listen(8080, '127.0.0.1', () => {
  console.log(`Server started on`, server.address());
});
