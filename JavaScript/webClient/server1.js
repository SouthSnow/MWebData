var http = require('http'),
      url = require('url');

// var server = http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type':'text/plain'});
// 	res.write("hello world\n");
// 	res.end();
// });
// server.listen(8888);

function start(route, handle) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log('Request for' + pathname + 'received');
		// var content = route(handle, pathname, res);
		// res.writeHead(200, {'Conten-Type':'text/plain'});
		// res.write(content);
		// res.end();
		// var postData = "";
		// req.setEncoding("utf8");
		// req.addListener("data", function (postDataChunk){
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk'" + postDataChunk +"'.");
		// });
		// req.addListener("end", function(){
			// route(handle, pathname, res, postData);
		// });

		route(handle, pathname, res, req);

	}
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log('Server has started');
}

exports.start = start;


// var http = require("http");
// var url = require("url");

// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     route(handle, pathname, response, request);
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;

