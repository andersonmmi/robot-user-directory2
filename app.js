
const express = require('express');
const app = express();
const port = 3000;
const mustache = require('mustache-express');
const data = require('./data.js')

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(__dirname+'/public'));

// can I serve my HTML document here?
app.get('/',function(req, res) {
  res.render('index', data);
});

app.get('/:id', function (req, res) {
 let id = req.params.id - 1;
 res.render('id', data.users[id]);
 console.log(id);

})


app.listen(port, function(){
  console.log("Listening on " + port);
  // console.log(data);
})
