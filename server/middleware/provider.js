const express = require('express');
const bodyParser = require('body-parser');

//the function that will provide middleware to our server
function provider(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
};

//export the the provider function
module.exports = {
    provider
};