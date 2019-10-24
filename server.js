const express = require("express");
const flash = require("connect-flash");
const morgan = require('morgan')
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session)
const routes = require("./routes");
const db = require("./models");
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 3001;


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mynextroll");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
