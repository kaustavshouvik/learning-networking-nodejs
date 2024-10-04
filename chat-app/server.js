import net from 'node:net';

const server = net.createServer();

const clients = [];

server.on('connection', (socket) => {
  console.log(`A client connected!`);

  clients.push(socket);

  socket.on('data', (data) => {
    for (const client of clients) {
      client.write(data);
    }
  });

  socket.on('end', () => {
    console.log(`Someone disconnected!`);
  });
});

server.listen(8080, '127.0.0.1', () => {
  console.log(`Server started ->`, server.address());
});
