var express = require('express');
var router = express.Router();
/* GET users listing. */
router.route("/user")
    .get(function(req,res){
        var response = {};
        var userDb = req.db.User;
        userDb.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;
            }
            res.json(response);
        });
    }).post(function(req,res){
        console.log("vao roi");
        console.log(req.db);
        var userDb = new req.db.User();
        var response = {};
        
        userDb.name = req.body.name;
        userDb.email = req.body.email;
        userDb.password = req.body.password;
        
        userDb.save(function(err) {
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });
    
router.route("/login")
    .get(function(req,res){
        var response = {};
        var userDb = req.db.User;
        userDb.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;
            }
            res.json(response);
        });
    }).post(function(req,res){
        console.log("vao roi");
        console.log(req.db);
        var userDb = new req.db.User();
        var response = {};
        
        userDb.name = req.body.name;
        userDb.email = req.body.email;
        userDb.password = req.body.password;
        
        userDb.save(function(err) {
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });

module.exports = router;
