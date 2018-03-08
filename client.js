const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

function registerHandler(onMessageReceived) {
  socket.on('message', onMessageReceived);
}

function unregisterHanlder() {
  socket.off('message');
}

socket.on('error', (err) => {
  console.log('recieved socket err:');
  console.log('err');
});

function register(name, cb) {
  socket.emit('register', name, cb);
}

function join(chatroomName, cb) {
  socket.emit('join', chatroomName, cb);
}

function leave(chatroomName, cb) {
  socket.emit('leave', chatroomName, cb);
}

function message(chatroomName, msg, cb) {
  socket.emit('message', { chatroomName, message: msg }, cb);
}

function getChatrooms(cb) {
  socket.emit('chatrooms', null, cb);
}

function getAvailableUsers(cb) {
  socket.emit('availableUsers', null, cb);
}
