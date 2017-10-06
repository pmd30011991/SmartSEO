exports.getList =  function(req, res) {
  res.json({});
}


exports.event = function(socket,eventData) {
  // user data from the socket.io passport middleware
  if (socket.request.user && socket.request.user.logged_in) {
    console.log(socket.request.user);
  }
}