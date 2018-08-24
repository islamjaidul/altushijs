var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://islamjaidul:Ind38maK@ds263989.mlab.com:63989/weather_app');

module.exports = {mongoose};