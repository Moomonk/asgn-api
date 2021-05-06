/**
 * app.js
 * Entry point file for asgn-api application
 * Project 3
 * Name: Cody Blakert
 * COMP2150 Web Services
 */

let express = require("express")
let app = express();
const apiRouter = require("./asgn-router.js");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

//Body-parser setup
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//Mongoose connection
mongoose.connect("mongodb://localhost/assignments", {useNewUrlParser: true});
var db = mongoose.connection;

//Connection error?
if(!db) {
    console.log("DB connection error.");
} else {
    console.log("Successful DB connection.");
}

//Port id
var port = 8080;

//Set entery point for API
app.use("/api", apiRouter);

app.get('/', (req, res) => res.send("Welcome to your assignment database."));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});