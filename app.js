let express = require('express')
let app = express();
const apiRouter = require('./asgn-router.js');

var port = 8080;

app.use("/api", apiRouter);

app.get('/', (req, res) => res.send('Hello world with Express'));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});