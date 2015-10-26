var bla = "bla";
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("angularjs", {default: "index.html"}));
app.listen(5000);