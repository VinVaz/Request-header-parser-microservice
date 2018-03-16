var http = require('http');
var os = require("op");
var ip = require("ip");


var port = process.env.PORT || 8080;
var IP_adress = 0;
var language = "";
var operatingSystem = "";

  http.createServer(function(req, res){
	   
	var output = {
		ipaddress: IP_adress,
		language: language,
		software: operatingSystem
	}   
	   
	  res.write(JSON.stringify(output));
      res.end();
	
  }).listen(port);
	