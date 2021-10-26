var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){

}


server.listen(3456, () => {
    console.log('server listning on port 3456');
})