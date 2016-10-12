var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

require('dotenv').config({silent: true});

var db;
console.log('Hellos from REST API');
console.log('Testing enviroment variables: ' + process.env.ENV);

if (process.env.ENV == 'Test') {    
    //db = mongoose.connect(process.env.DB_CONNECTIONSTRING);
}
else {    
    //db = mongoose.connect(process.env.DB_CONNECTIONSTRING);
}

var app = express();
var port = process.env.PORT || 3001;

//var User = require('./app/models/userModel');
//userRouter = require('./app/routes/userRoutes')(User);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/api/users', userRouter);

app.get('/', function (req, res) {
    res.send('welcome to my REST API!');
});

app.listen(port, function () {
    console.log('running app on  PORT: ' + port);
});

module.exports = app; 
