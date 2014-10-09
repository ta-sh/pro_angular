
1) instaling node.js 
	Go to http://nodejs.org and download and install the Node.js package for your platform. 
	Make sure you install the package manager and that the installation directory is added to your path.
	To test the Node.js installation, open a command line and type "node". 
	Wait until the prompt changes and then enter the following:
		function testNode() {return "Node is working"}; testNode();	

2) Installing the Web Server

	npm install connect
	npm install serve-static

	/* server.js */
	var connect = require('connect');
	
	connect.createServer(
		.static("../angularjs")
	).listen(5000);

	This simple code creates a basic web server that will respond to requests on port 5000 and serve up files contained
	in a folder called angularjs.

3) Installing the Test System
	npm install -g karma

4) Download the latest stable release of AngularJS from http://angularjs.org
