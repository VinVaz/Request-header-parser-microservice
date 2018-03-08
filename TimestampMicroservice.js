var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
	
	var givenTime = decodeURI(req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var myMoment = moment(givenTime, "MMMM D, YYYY");
	console.log(myMoment);
	//res.write(myMoment);
    res.end();
	
	}).listen(8080);
	