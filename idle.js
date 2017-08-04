var http = require('http');
var path = require('path');

  app.use(express.static(path.join(__dirname, 'public')));
    
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080); 
