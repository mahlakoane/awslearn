// Import all dependencies & middleware here 

const express = require('express');

//The following I have to npm install, they will be saved in package.json
const bodyParser = require('body-parser');   // body-parser is my first dependency that I need here.
const mongoose = require('mongoose');  // npm install mongoose does not install the mongodb server on the machine!
const { MongoChangeStreamError } = require('mongodb');


// Now we initialise an express js application() we instantiate an application, as if you are doing so a class object

const app = express();

// Now use your dependencies.

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Here it's now the API

app.get('/',(req,res) => {
    res.status(200).json({
        status: 'success'
    });
});

// When you hit the root path you receive a response saying success. this can be used for troubleshooting
// The server program when hit at the specific port where it will be running, eg 3000, on the specific IP
// For example localhost:3000 http//:localhost:3000/ is going to be root, other api's will be routed to,
// e.g ttp//:localhost:3000/home will take us to the /home page, which would be configured in the API,
//The corresponding response will be the page itself.


// Now you can start the server here:

app.listen(8080, () => {
    console.log('Example app listening on port 8080 on this machine');
    mongoose.connect('mongodb://localhost/test').then(() => {
        console.log('connected to mongoDB at port 27017');
    });
});