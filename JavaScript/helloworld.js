var http = require('http');
function onRequest (request, response) {
	console.log('Request received');
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello world');
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log('server has started');



var  i = 1;
var j = 2;
var r = 3;

function add(a, b) {
	return a + b;
}


add(2,1);

console.log(add(2,3));
