const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (client) => {
  client.on('register', handleRegister);
  client.on('join', handleJoin);
  client.on('leave', handleLeave);
  client.on('message', handleMessage);
  client.on('chatrooms', handleGetChatrooms);
  client.on('availableUsers', handleGetAvailableUsers);

  client.on('disconnect', () => {
    console.log('client disconnect... ', client.id);
    handleDisconnect();
  });

  client.on('error', (err) => {
    console.log('received error from client: ', client.id);
    console.log(err);
  });
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log('listening on port 3000');
});
