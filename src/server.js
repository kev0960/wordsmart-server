var express = require('express');
var app = express();

var http = require('http').Server(app);

// Open the server
var server_port = process.env.PORT || 80;
http.listen(server_port, function() {
  console.log('Server is running on ' + server_port);
});

app.get('/all-word-list', function(req, res) {
    res.sendFile('/public/all-word-list.html', {
    root: __dirname
  });
});
app.get('/word-list/:title/:name', function(req, res) {
    var title = decodeURI(req.params.title);
    var name = decodeURI(req.params.name);

    console.log("Title :: ", title, " Name :: ", name);
    res.sendFile('/public/' + title + '/' + name, {
        root: __dirname
    });
});
