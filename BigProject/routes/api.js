var express = require('express');
var router = express.Router();
/* GET users listing. */
router.route("/user")
    .post(function (req, res) {
        // console.log("vao roi");
        // console.log(req.db);
        var userDb = new req.db.User();
        var response = {};

        userDb.name = req.body.name;
        userDb.email = req.body.email;
        userDb.password = req.body.password;

        userDb.save(function (err) {
            response = { "success": !err };
            res.json(response);
        });
    });

router.route("/login")
    .post(function (req, res) {
        var UserDb = req.db.User;
        UserDb.findOne({
            "name": req.body.name,
            "password": req.body.password
        },
            function (err, user) {
                if(err || user == null){
                    response = { "success": false };
                }else{
                    response = { "success": true };
                }
                res.json(response);
            });
    });
router.route("/test")
    .post(function (req, res) {
        var QuestDb = req.db.Question;
        var totalQuestion = req.body.total_question;
        if(totalQuestion==null){
            totalQuestion = 15;
        }
        QuestDb.find({})
            .limit(req.body.total_question)
            .exec(function(err, questions){
                var response;
                if(err){
                    response = {"success" : false};
                }else{
                    response = {"success" : true, questions};
                }
                res.json(response);
            });
    });
router.route("/reading")
    .post(function(req, res){
        var ReadingDb = req.db.Reading;
        //console.log(ReadingDB);        
        var id = req.body.id;
        if(id == null){
            id = 0;
        }
        ReadingDb.find({"_id": 0}).exec(function(err, list){
            res.json(list);
        })
    });

module.exports = router;
