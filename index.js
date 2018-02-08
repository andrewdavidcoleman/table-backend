var express = require('express');
var app = express();
var htmlRoutes = require('./routes/html-routes.js')

app.get('/hello', function(req, res){
   res.send("Hello world!");
});

app.post('/hello', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
})

app.all('/test', function(req, res){
  res.send("HTTP method doesn't have any effect on this route!");
});

app.use('/home', htmlRoutes);

app.listen(3000);
