var http = require('http'), url = require('url');

function handleServerRequest(request, response) {
  if (request.url.indexOf('favicon.ico') !== -1) {
    response.end();
    return;
  }

  // console.log("Client hit %s, with the following: ", request.url, request.headers);

  var urlInfo = url.parse(request.url, true);

  console.log('There are %d query parameters.', Object.keys(urlInfo.query).length);
  for (q in urlInfo.query) {
    console.log('Query paramter: ' + urlInfo.query[q]);
  }

  // Log the value of bork and blag
  var bork = urlInfo.query.bork;
  console.log("1st Query info: ", bork);

  var blag = urlInfo.query.blag;
  console.log("2nd Query Info: ", blag);

  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello World\n');
  if (bork !== undefined) {
    response.write(bork);
    response.write('\n');
  }
  if (blag !== undefined) {
    response.write(blag);
  }
  response.end('\n');
}

var httpServer = http.createServer(handleServerRequest);

httpServer.listen(8080);

console.log('Server started');