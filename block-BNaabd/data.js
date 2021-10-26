var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){

}

server.listen(7000, () => {
    console.log('server listening on 7k')
})