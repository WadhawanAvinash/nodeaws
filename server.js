const http = require('http');

const app = require('./app.js');

const port = process.env.POST || 3000;

const server = http.createServer(app);

server.listen(port);