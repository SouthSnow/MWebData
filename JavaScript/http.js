var http = require('http');
var app = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world');
		console.log(req);

});
console.log('server start');
app.listen(1337,'127.0.0.1');
