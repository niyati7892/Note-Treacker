const express = require("express");

// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express will serve static files in public and data directories
app.use(express.static("public"));

require("./apiRoutes.js")(app);
require("./htmlRoutes")(app);


// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on http://localhost: " + PORT);
});
