var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
	
	if(req.url != '/favicon.ico'){
	
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  //decode the given url that represents a date 
	  var givenTime = decodeURI(req.url);
	  //set the regular expression to be used
	  var firstRegex = /time/;
	  var secondRegex = /time/;
	  //tests if the date is a unix timestamp or a natural language form of date
	  var firstTest = firstRegex.test(givenTime);
	  var secondTest = secondRegex.test(givenTime);
	  var myMoment = {};
	  
	  //coverts the given date to a moment format
	  if(firstTest){
        myMoment = moment(givenTime, "MMMM D, YYYY").format();;  
	  }
	  else if(secondTest){
	    myMoment = moment.unix(givenTime);
	  }
	  else console.log("Err"); 
	  
	  
	  var output = {
		  unix: moment(myMoment).unix(),
		  natural: moment(myMoment).format("MMMM D, YYYY")
	  }
	  	  console.log(output);
	  
	  //res.write(myMoment);
      res.end();
	}
	
}).listen(8080);
	