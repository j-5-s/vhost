
/**
 * Module dependencies.
 */

var one = require('../one/app').one
  , two = require('../two/app').two
  , socket = require('../socket/app').socket;

var express = require('express')
  , vhost = express.createServer();


vhost.use(express.vhost('one.localhost', one));
vhost.use(express.vhost('two.localhost', two));
vhost.use(express.vhost('socket.localhost', socket));


vhost.listen(3000);
console.log("Express server listening on port %d", vhost.address().port);
