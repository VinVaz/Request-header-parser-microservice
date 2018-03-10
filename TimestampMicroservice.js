var http = require('http');
var moment = require('moment');

var port = process.env.PORT || 8080;

  http.createServer(function(req, res){
    //escape unnecessary response call
	if(req.url != '/favicon.ico'){
	
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  //decode the given url that gives a date 
	  var givenTime = decodeURI(req.url);
	  givenTime = givenTime.slice(1);
	  
	  var firstRegex = /^[A-Za-z]{1,10}\s\d{1,2}[,]\s\d{4}/;
	  var secondRegex = /^\d+$/;
	  
	  //tests if the date is a unix timestamp or a natural language form of date
	  var isNaturalTime = firstRegex.test(givenTime);
	  var isUnixTime = secondRegex.test(givenTime);
	  var momentTime = {};
	  
	  //coverts the given date to a moment format
	  if(isNaturalTime){
        momentTime = moment(givenTime, "MMMM D, YYYY").format();;  
	  }else if(isUnixTime){
	    momentTime = moment.unix(givenTime);
	  }else console.log("Err"); 
	  
	  var output = {
		  unix: moment(momentTime).unix(),
		  natural: moment(momentTime).format("MMMM D, YYYY")
	  }
	  console.log(port);
	  res.write(JSON.stringify(output));
      res.end();
	}
  }).listen(port);
	