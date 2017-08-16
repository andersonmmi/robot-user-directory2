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

app.use('/robot-user-directory2',express.static('robot-user-directory2'));

app.get('/',function(req, res) {
  res.send(`
      <ul>
        <li>test1</li>
        <li>test2</li>
      </ul>`);
});


app.listen(port, function(){
  console.log("Listening on " + port);
})
