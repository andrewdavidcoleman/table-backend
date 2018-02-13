const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');



const PORT = process.env.PORT || 3000;

mongoose.Promise = Promise;

const Breakfast = require("./model.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(logger("dev"));

mongoose.connect('mongodb://localhost/breakfast');
const db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once('open', function() {
  console.log("Mongoose connection successful.");
});

require('./api')(app);

app.listen(PORT, () => console.log('App listening on PORT: ' + PORT));
