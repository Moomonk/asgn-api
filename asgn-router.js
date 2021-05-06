/**
 * asgn-router.js
 * Router file for asgn-api application
 * Project 3
 * Name: Cody Blakert
 * COMP2150 Web Services
 */

let router = require("express").Router();
let controller = require("./asgn-controller.js");

// Begining page/validation it is running
router.get("/", function (req, res) {
    res.json ({
        status: "API is working.",
        message: "Welcome to the Asgn API"
    });
});

// Linked controller methods
router.route("/assignments")
    .get(controller.index)
    .post(controller.new);

router.route("/assignments/:assignment_id")
    .get(controller.view)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;