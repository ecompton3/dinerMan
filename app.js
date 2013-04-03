var http = require('http');

http.createServer(function(req, res){
  res.end('hello heroku');
}).listen(process.env.PORT || 8080);