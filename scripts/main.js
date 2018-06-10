var url = require("url");
var filesystem = require("fs");

module.exports = {
    OnRequest: function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        var path = url.parse(request.url).pathname;
        switch(path) {
            case "/":
                renderHTML("../html/index", response);
                break;
            case "/index":
                renderHTML("../html/index", response);
                break;
            case "/rules":
                renderHTML("../html/rules", response);
                break;
            case "/about":
                renderHTML("../html/about", response);
                break;
            case "/ranking":
                renderHTML("../html/ranking", response);
                break;
            default:
                response.writeHead(404);
                response.write("Hold up. This page does not exist.");
                response.end();
        }
    }
};

function renderHTML(path, response) {
    filesystem.readFile(path, null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write("Error 404: file not found");
        }
        else {
            response.write(data);
        }
        response.end();
    });
}
