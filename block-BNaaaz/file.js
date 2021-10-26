var http = require('http');

var server = http.createServer(handleRequest);




server.listen(3000, () => {
    console.log('server is listening on PORT 3000')
})