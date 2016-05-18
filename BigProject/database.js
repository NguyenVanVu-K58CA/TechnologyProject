var mongoose    =   require("mongoose");
mongoose.connect('mongodb://117.103.209.78:27017/OnlineLearning');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var Model = {};
var Listening = require("./models/Listening");
var Question = require("./models/Question");
var Reading = require("./models/Reading");
var User = require("./models/User");
var Schema = mongoose.Schema;
var callback;
//console.log(User);
db.once('open', function() {
    Model.User = mongoose.model('User', new Schema(User));
    Model.Reading = mongoose.model("Reading", new Schema(Reading));
    Model.Question = mongoose.model("Question", new Schema(Question));
    Model.Listening = mongoose.model("Listening", new Schema(Listening));
    if(typeof callback  == 'function'){
        //console.log(Model);
        callback(Model);  
    }
});
module.exports = function(cb){
       callback = cb;
}


