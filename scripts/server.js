const http = require("http");
const port = 3000;
var main = require("./main");

const server = http.createServer(main.OnRequest);
server.listen(port);
