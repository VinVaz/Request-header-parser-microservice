var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
	//escape unnecessary request
	if(req.url != '/favicon.ico'){
	
	  //decode the given url that show a date 
	  var givenTime = decodeURI(req.url);
	  givenTime = givenTime.slice(1);
	  
	  var naturalTime = moment(givenTime, "MMMM D, YYYY");
	  var unixTime = moment.unix(givenTime);
      var momentTime = {};
	  
	  //tests if the date is a unix timestamp or a natural language form of date
	  if(naturalTime.isValid()) momentTime = naturalTime.format(); 
	  else if(unixTime.isValid()) momentTime = unixTime; 
	  else console.log("Err"); 
	  
	  var output = {
		  unix: moment(momentTime).unix(),
		  natural: moment(momentTime).format("MMMM D, YYYY")
	  }
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.write(JSON.stringify(output));
      res.end();
	}
}).listen(8080);
	