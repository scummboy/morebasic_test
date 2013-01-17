var http = require('http'), url = require('url');

function handleServerRequest(request, response) {
    //console.log("Client hit %s, with the following: ", request.url, request.headers);

    var urlInfo = url.parse(request.url, true);

    // Log the value of bork and blag
    console.log("1st Query info: ", urlInfo.query.bork);
    console.log("2nd Query Info: ", urlInfo.query.blag);

    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello World\n');
    if (urlInfo.query.bork !== undefined) {
        response.write(urlInfo.query.bork);
        response.write('\n');
    }
    if (urlInfo.query.blag !== undefined) {
        response.write(urlInfo.query.blag);
        response.end('\n');
    }
}

var httpServer = http.createServer(handleServerRequest);

httpServer.listen(8080);

console.log('Server started');