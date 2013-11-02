var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs')
var buf = fs.readFileSync('index.html');
var html = buf.toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
