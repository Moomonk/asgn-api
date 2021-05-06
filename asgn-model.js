/**
 * asgn-model.js
 * Model file for asgn-api application
 * Project 3
 * Name: Cody Blakert
 * COMP2150 Web Services
 */

 const mongoose = require("mongoose");

/*
set up the schema so the database stores the following data:

    1. courseName of type String
    2. assignmentName of type String with the required attribute set to true.
    3. dueDate of type Date

*/

var assignmentSchema = mongoose.Schema ({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
});

var Assignment = module.exports = mongoose.model("Current Assignments", assignmentSchema);
module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}