const express = require('express')
require('dotenv').config();

require('./database/connection.js')

const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Settings
app.set('port', process.env.PORT || 3000);

//Routes
app.use(require('./routes/student.routes'));
 
/* app.get('/', function (req, res) {
  res.send('Hello World')
}) */
 
app.listen(app.get('port'), ()=> console.log(`Servidor corriendo en puerto ${app.get('port')}`));