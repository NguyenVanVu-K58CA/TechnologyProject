var mongoose    =   require("mongoose");
mongoose.connect('mongodb://117.103.209.78:27017/OnlineLearning');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var Model = {};
var Listening = require("./models/Listening");
var Question = require("./models/Question");
var Reading = require("./models/Reading");
var User = require("./models/User");

db.once('open', function() {
    Model.User = mongoose.model('User', User);
    Model.Reading = mongoose.model("Reading", Reading);
    Model.Question = mongoose.model("Question", Question);
    Model.Listening = mongoose.model("Listening", Listening);
});

module.export = Model;