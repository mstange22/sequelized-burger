var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {

        db.Burger.findAll({            
            order: [['burger_name', 'ASC']]
        }).then(function (data) {
            res.render("index", { burgers: data });
        });
    });

    app.post("/", function (req, res) {

        if (req.body.burger === "") {
            res.redirect("/");
        }

        else {

            db.Burger.create({
                burger_name: req.body.burger
            }).then(function(data) {

                res.redirect("/");
            });
        }
    });

    app.put("/:id", function (req, res) {

        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.redirect("/");
        });
    });

    app.put("/", function (req, res) {

        db.Burger.update({
            devoured: false
        }, {
            where: {
                devoured: true
            }
        }).then(function (data) {
            res.redirect("/");
        });
    });

    app.delete("/", function (req, res) {

        condition = "id=" + req.body.id;

        db.Burger.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(data) {

            res.redirect("/");
        });
    });

    app.post("/api/login", function (req, res) {
        
        // db.Customer.create({
        //     customer_name: req.body.customer
        // }).then(function(data) {
        //     res.json(data);
        // });
        res.redirect("/");
    });
};