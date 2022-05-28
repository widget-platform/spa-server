const express = require("express");
const compression = require("compression");

const PORT = 5000;
const PATH = 'dist';

const app = express();
app.use(compression());


// ---- SERVE STATIC FILES ---- //
app.get('*', express.static(PATH, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: PATH});
});

// ---- START UP THE NODE SERVER  ----
app.listen(PORT, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + PORT);
});