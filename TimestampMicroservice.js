var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
	
	if(req.url != '/favicon.ico'){
	
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  //decode the given url that represents a date 
	  var givenTime = decodeURI(req.url);
	  var firstFilter = /time/;
	  var secondFilter = /time/;
	  var firstTest = firstFilter.test(givenTime);
	  var secondTest = secondFilter.test(givenTime);
	  var myMoment = {};
	  
	  //check if the date is either a unix timestamp or 
	  //a natural language form of date and then
	  //changes the received date and covert to a moment format
	  if(firstTest){
        myMoment = moment(givenTime, "MMMM D, YYYY").format();;  
	  }else if(secondTest){
	    myMoment = moment.unix('1450137600');
	  }else console.log("Err"); 
	  
	
	  var output = {
		  unix: moment(myMoment).unix(),
		  natural: moment(myMoment).format("MMMM D, YYYY")
	  }
	  	  console.log(output);
	  
	  //res.write(myMoment);
      res.end();
	}
	
}).listen(8080);
	