var express = require('express');
var router = express.Router();
/* GET users listing. */
router.route("/user").post(function (req, res) {
    // console.log("vao roi");
    // console.log(req.db);
    var UserDb = req.db.User;
    var response = {};
    var verb = req.body.verb.toUpperCase();
    switch (verb) {
        case "GET_ALL":
            UserDb.find({}, function (err, list) {
                console.log(list);
                res.json(list);
               
            });
            break;
        case "GET_BY_USER":
            var userName = req.body.userName;
            UserDb.findOne({ "userName": userName }, function (err, user) {
                console.log(user);
                res.json(user);
            });
            break;
        case "CREATE":
            //console.log("Vao Create");
            var userModel = new UserDb();
            userModel.name = req.body.name;
            userModel.userName = req.body.userName;
            userModel.email = req.body.email;
            userModel.password = req.body.password;
            userModel.isAdmin = false;

            if (req.body.isAdmin != null) {
                userModel.isAdmin = req.body.isAdmin;
            }

            userModel.save(function (err) {
                response = { "success": !err };
                res.json(response);
            });
            break;
        case "UPDATE":
            var userName = req.body.userName;
            UserDb.findOne({ "userName": userName }, function (err, user) {
                if (err) {
                    response = { "success": !err };
                    res.json(response);
                }
                if (req.body.name != null) {
                    user.name = req.body.name;
                }
                if (req.body.email != null) {
                    user.email = req.body.email;
                }
                if (req.body.password != null) {
                    user.password = req.body.password;
                }
                if (req.body.idAdmin != null) {
                    user.isAdmin = req.body.isAdmin;
                }
                user.save(function (errSave) {
                    response = { "success": !errSave };
                    res.json(response);
                })

            })
            break;
        case "DELETE":
            var userName = req.body.userName;
            UserDb.remove({ "userName": userName }, function (err) {
                response = { "success": !err };
                res.json(response);
            })
            break;
    }
});

router.route("/login").post(function (req, res) {
    var UserDb = req.db.User;
    UserDb.findOne({
        "userName": req.body.userName,
        "password": req.body.password
    },
        function (err, user) {
            if (err || user == null) {
                response = { "success": false };
            } else {
                response = { "success": true };
            }
            res.json(response);
        });
});

router.route("/test_result").post(function (req, res) {
    var respone = ['A', 'B', 'A', 'C', 'D', 
        'C', 'B', 'A', 'D', 'D', 
        'A', 'A', 'C', 'C', 'D',
        'B', 'B', 'A', 'B', 'A'];
    res.json(respone);
});

// router.route("/test")
//     .post(function (req, res) {
//         var QuestDb = req.db.Question;
//         var totalQuestion = req.body.total_question;
//         if (totalQuestion == null) {
//             totalQuestion = 15;
//         }
//         QuestDb.find({})
//             .limit(req.body.total_question)
//             .exec(function (err, questions) {
//                 var response;
//                 if (err) {
//                     response = { "success": false };
//                 } else {
//                     response = { "success": true, questions };
//                 }
//                 res.json(response);
//             });
//     });

// router.route("/reading")
//     .post(function(req, res){
//         var ReadingDb = req.db.Reading;
//         //console.log(ReadingDB);        
//         var id = req.body.id;
//         if(id == null){
//             id = 0;
//         }
//         ReadingDb.find({"_id": 0}).exec(function(err, list){
//             res.json(list);
//         })
//     });

module.exports = router;
