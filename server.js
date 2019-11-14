const http = require('http');
const app = require('./backend/budget');

app.set('port', 8080);
const server = http.createServer(app);


server.listen(8080);
