const http = require('http');
http.createServer(function (request, response) {
    response.write("{}");
    response.end();
}).listen(3030);
console.log('Server running at http://127.0.0.1:3030/');
