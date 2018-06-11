var url = require("url");
var filesystem = require("fs");

module.exports = {
    OnRequest: function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        var path = url.parse(request.url).pathname;
        switch(path) {
            case "/":
                renderHTML("../html/index.html", response);
                break;
            case "/index.html":
                renderHTML("../html/index.html", response);
                break;
            case "/rules.html":
                renderHTML("../html/rules.html", response);
                break;
            case "/about.html":
                renderHTML("../html/about.html", response);
                break;
            case "/ranking.html":
                renderHTML("../html/ranking.html", response);
                break;
            default:
                response.writeHead(404);
                response.write("Hold up. This page doesn't even exist?");
                response.end();
        }
    }
};

function renderHTML(path, response) {
    filesystem.readFile(path, null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write("~(o_o)~ error404: file not found");
        }
        else {
            response.write(data);
        }
        response.end();
    });
}
