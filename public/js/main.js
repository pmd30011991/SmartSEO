$(document).ready(function() {

  // Place JavaScript code here...
  let socket = io.connect(window.location.href);
  socket.emit('eventMessage', { message: 'Hello to you too, Mr.Server!' });

});