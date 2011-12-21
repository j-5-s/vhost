<script src="http://socket.localhost:3000/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://socket.localhost:3000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>