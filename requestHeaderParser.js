var http = require('http');
var os = require("os");
//var ip = require("ip");


var port = process.env.PORT || 8080;
var IP_adress = 0;
var language = "";
var operatingSystem = "";

  http.createServer(function(req, res){
	   
	IP_adress = req.headers['x-forwarded-for'] ||
            	req.connection.remoteAddress || 
				req.socket.remoteAddress || 
				req.connection.socket.remoteAddress;
    
	language = req.headers["accept-language"];
	language = language.split(";")[0];
	language = language.split(",")[0];
	
	var agent = req.headers["user-agent"];
	myRegex = /(?:[(])([^(]*)(?:[)])/;
    operatingSystem = myRegex.exec(agent)[1];
	   
	var output = {
		ipaddress: IP_adress,
		language: language,
		software: operatingSystem
	}   
	   
	  res.write(JSON.stringify(output));
      res.end();
	
  }).listen(port);
	