

function route( handle,pathname, res, req) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		 handle[pathname](res, req);
	}
	else {
		console.log("No request handler found for " + pathname);
		res.writeHead(404, {'Content-Type':'text/html'});
		res.write('404 Not Found');
		res.end();
	}
}

exports.route = route;

// function route(handle, pathname, response, request) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname](response, request);
//   } else {
//     console.log("No request handler found for " + pathname);
//     response.writeHead(404, {"Content-Type": "text/html"});
//     response.write("404 Not found");
//     response.end();
//   }
// }

// exports.route = route;
