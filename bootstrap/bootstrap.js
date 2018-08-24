// All dependencies registered here
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const helpers = require('../utils/Helpers');
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// set static page location
app.use(express.static(path.join(__dirname, '../public')));
// set templating engine
app.set('view engine', 'hbs');

// Utility
hbs.registerHelper('asset', () => {
    return helpers.asset;
})

module.exports = app;