const express = require("express");
const server = express();
const bodyParser = express.urlencoded();
// const { home } = require("./template.js");
const staticHandler = express.static("public");

//routes
const homeRoutes = require("./Routes/home");
const postRoutes = require("./Routes/posts");

server.use(bodyParser);
server.use(staticHandler);
server.use("/", homeRoutes);
server.use("/posts", postRoutes.router);


module.exports = server;
