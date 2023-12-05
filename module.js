var http = require('http');
var dt = require('./modules');


http.createServer(function (req,res) {
    res.writeHead(200,{'Context-Type':'text/html'});
    res.write("current time and date"+dt.myDateTime());
    res.end();

}).listen(8080,() =>{
     console.log('in port http://localhost:8080')
})


