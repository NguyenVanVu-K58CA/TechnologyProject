var express = require('express');
var router = express.Router();
/* GET users listing. */
router.route("/")
    .get(function(req,res){
        var response = {};
        var mongoOp = req.db;
        mongoOp.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;
            }
            res.json(response);
        });
    }).post(function(req,res){
        var db = new req.db();
        var response = {};
        // fetch email and password from REST request.
        // Add strict validation when you use this in Production.
        db.userEmail = req.body.email;
        // Hash the password using SHA1 algorithm.
        db.userPassword =  require('crypto')
                          .createHash('sha1')
                          .update(req.body.password)
                          .digest('base64');
        db.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });

module.exports = router;
