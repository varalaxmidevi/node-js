var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello from Node.js</h1>\n");
});

server.listen(8000);

console.log("Node.js is listening on port 8000");
