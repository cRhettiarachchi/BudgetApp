const http = require('http');

const server = http.createServer(((request, response) => {
  response.end('this is the server running');
}));

server.listen(3000);
