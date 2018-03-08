var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
	
	if(req.url != '/favicon.ico'){
	
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  var givenTime = decodeURI(req.url);
	  
	  var myMomentOne = moment(givenTime, "MMMM D, YYYY");
	  var myMomentTwo = moment.unix(givenTime);
      var myMoment = {};
	  
	  if(myMomentOne.isValid()) myMoment = myMomentOne.format(); 
	  else if(myMomentTwo.isValid()) myMoment = myMomentTwo; 
	  else console.log("Err"); 
	  
	  console.log(myMoment);
	  /*
	  var output = {
		  unix: myMoment.unix,
		  natural: myMoment.natural
	  }*/
	  //res.write(myMoment);
      res.end();
	}
	
}).listen(8080);
	