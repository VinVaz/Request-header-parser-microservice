var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
	
	if(req.url != '/favicon.ico'){
	
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  //decode the given url that represents a date 
	  var givenTime = decodeURI(req.url);
	  
	  //changes the received date and covert to a moment format
	  var myMomentOne = moment(givenTime, "MMMM D, YYYY");
	  var myMomentTwo = moment.unix('1450137600');
      var myMoment = {};
	  
	  //check if the date is either a unix timestamp or 
	  //a natural language form of date
	  if(myMomentOne.isValid()) myMoment = myMomentOne.format(); 
	  else if(myMomentTwo.isValid()) myMoment = myMomentTwo.format(); 
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
	