const express = require('express');
var todoController = require('./controllers/todoController');
var app = express();


app.set('view engine', 'ejs');

//static files.
app.use(express.static('./public'));

//fire controller
todoController(app);

const port = process.env.port || 3000;
app.listen(port);
console.log('listening to port 3000');

