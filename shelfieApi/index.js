"use strict";

var express = require("express");
var app = express();

const jsonParser = require("body-parser").json;
app.use(jsonParser());

const Models = require("./models");
const Routes = require("./routes");
const errorHandler = require("./error-handler");
const cors = require('./cors');

const mongoUrl = process.env.MONGO_DB_URL || "mongodb://localhost/shelfie";

const models =  Models(mongoUrl);
const routes = Routes(models);

//CORS, Access Control
app.use(cors);

app.get("/api/books", routes.allBooks);

app.post("/api/books", routes.addBook);

errorHandler(app);

var port = process.env.PORT || 3006;

app.listen(port, function() {
  console.log("application is running on port ", port);
});
