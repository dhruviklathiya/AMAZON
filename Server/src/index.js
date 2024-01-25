const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/dbConnection");
const config = require("./config/config");
require("./helpers/crons.js");
const routes = require("./routes /v1");

const app = express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

// /** enable cors */
app.use(cors());
app.options("*", cors());

/** upload image */
// app.use(express.static(`./public`));

app.use("/v1",routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("=====Server is running on port: " + config.port + " =====")
});