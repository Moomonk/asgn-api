/**
 * asgn-controller.js
 * Controller file for asgn-api application
 * Project 3
 * Name: Cody Blakert
 * COMP2150 Web Services
 */

let Assignment = require("./asgn-model.js");

// List all assignments (GET)
exports.index = function(req, res) {
    Assignment.get(function (err, assignments) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "Successful",
            message: "Assignments retrived!",
            data: assignments
        });
    });
}

// Create new assignment (POST)
exports.new = function (req, res) {
    var assignment = Assignment();
    assignment.courseName = req.body.courseName ? req.body.courseName : assignment.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;
    assignment.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New assignment added.",
            data: assignment
        });
    });
};

// View a specific assignment (GET)
exports.view = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Loading assignments",
            data:assignment
        });
    });
};

// Update a specific assignment (PUT)
exports.update = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        assignment.courseName = req.body.courseName ? req.body.courseName : assignment.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;
        assignment.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Assignment updated.",
                data: assignment
            });
        });
    });
};

// Delete specific assignment (DELETE)
exports.delete = function (req, res) {
    Assignment.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
        if(err) {
            res.send(err);
        }
        res.json(
            {
                status: "Successful",
                message: "Assignment Removed"
            });
    });
};