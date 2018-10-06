const http = require("http");
const port = 8000;
var main = require("./main");

const server = http.createServer(main.handleRequest);
server.listen(port);
