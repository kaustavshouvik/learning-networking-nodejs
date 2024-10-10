1. Connection-less.
   - For a socket to send data, there may not necessarily exist a receiver socket.
   - You send packets.. and that's it.
2. We need to specify a IP version, when creating a socket.
   - Before sending / receiving data, sockets need to know the type of IP.
     Things like headers, will be a little different depending on IPv4 or IPv6.
   - In TCP, it is not needed, because depending on the value of host ('::', '127.0.0.1', etc..),
     which we specify on the 'listen()' or 'createConnection()' method
     or even if we omit the host value, it may be bound to IPv6 or IPv4 or both.
