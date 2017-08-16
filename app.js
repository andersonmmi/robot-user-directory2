const path = require('path');
const moment = require('moment');
const chalk = require('chalk');
const express = require('express');
const app = express();
const port = 3000;
const mustache = require('mustache-express');

app.engine('mustache', mustache());
app.set('vews', './views');
app.set('view engine', 'mustache');

app.listen(port, function(){
  console.log("Listening on " + port);
})
