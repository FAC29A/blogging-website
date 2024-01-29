const express = require("express");
const server = express();

//register view engine
server.set("view engine", "ejs");

//middleware
const bodyParser = express.urlencoded();
const staticHandler = express.static("public");

//routes
const homeRoutes = require("./Routes/home");
const postRoutes = require("./Routes/posts");

server.use(bodyParser);
server.use(staticHandler);
server.use("/", homeRoutes);
server.use("/posts", postRoutes);

server.use((req, res) => {
  res.status(404).render("404", { title: "Route doesn't exist" });
});

module.exports = server;
