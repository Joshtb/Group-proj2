var express = require("express");

var router = express.Router();

var player = require("../models/player.js");
var path = require("path");


router.get("/store", function (req, res) {
    console.log("Ass and tits")
    player.selectAll(function (data) {
        // var hbsObject = {
        //     items: data
        //   };
        console.log("this far");
        res.render("store", {
            player: data
        });
        console.log(JSON.stringify(data));
    });

    router.put("/api/players/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        player.updateOne({
            eaten: req.body.eaten
        }, condition, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });




    // player.selectAll(function (data) {
    //     // var hbsObject = {
    //     //     items: data
    //     //   };
    //     console.log("this far");
    //     res.render("index", {
    //         player: data
    //     });
    //     console.log(JSON.stringify(data));
    // });
    // function that puts user data on the page
});

router.put("/api/players/:id", function (req, res) {
    var condition = "player_id = " + req.params.id
    console.log("condition", condition);

    player.updateOne({
        health: req.body.health,
        gp: req.body.gp,
        attackLight: req.body.attackLight,
        attackMed: req.body.attackMed,
        attackHeavy: req.body.attackHeavy,
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});


router.get("/home", function (req, res) {
    console.log("We got the home route$$$$$")
    res.sendFile(path.join(__dirname, "../public/assets/fights/home.html"))
});

router.get("/bossFight", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/fights/bossFight.html"))
});

router.get("/gameOver", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/fights/GameOver.html"))
});

router.post("/saveHero", function (req, res) {
    console.log("Our Hero *********", req.body);
    res.sendFile(path.join(__dirname, "../public/assets/fights/bossFight.html"))
});

router.get('/stage1', (req, res) => {
    res.sendFile(path.join(__dirname, "assets/Game/index.html"));
});

router.get('/stage2', (req, res) => {
    res.sendFile(path.join(__dirname, "..public/assets/Game/index2.html"));
});

router.get('/stage3', (req, res) => {
    res.sendFile(path.join(__dirname, "..public/assets/Game/index3.html"));
});

router.get('/stage4', (req, res) => {
    res.sendFile(path.join(__dirname, "..public/assets/Game/index.html"));
});

router.get('stage5', (req, res) => {
    res.sendFile(path.join(__dirname, "..public/assets/Game/index5.html"));
});


module.exports = router;