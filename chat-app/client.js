import net from 'node:net';
import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = async (dir) => {
  return new Promise((resolve) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = async (dx, dy) => {
  return new Promise((resolve) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

const askAndWriteToSocket = async (socket) => {
  const msg = await rl.question('Enter message > ');
  await moveCursor(0, -1);
  await clearLine(0);

  socket.write(msg);
};

const client = net.createConnection(
  {
    host: '127.0.0.1',
    port: 8080,
  },
  async () => {
    console.log('Connected to server');
    await askAndWriteToSocket(client);
  }
);

client.on('data', async (data) => {
  await clearLine(0);
  console.log();
  await moveCursor(0, -1);
  console.log(data.toString('utf8'));
  await askAndWriteToSocket(client);
});
