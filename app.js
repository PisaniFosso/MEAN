const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//conect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to db '+config.database);
});

//error connection
mongoose.connection.on('error', () => {
    console.log('connection to db error: '+err);
});
const app = express();

const users = require('./routes/users');

const port = 3000;

//cors enablr
app.use (cors());

//set static folders
app.use(express.static(path.join(__dirname, 'public')))

//Body parser enable
app.use (bodyParser.json());

app.use('/users', users);

//index route
app.get('/', (req, res) => {
    res.send('Invalide end point');
});

//start server
app.listen(port, () => {
	console.log('server started on port '+port);
});
