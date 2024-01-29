const express = require("express");
// const favicon = require("serve-favicon");
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
// server.use(
//   favicon(
//     "/Users/lucien/Desktop/lucien-webpage/blogging-website/public/img/smiling-face.ico",
//   ),
// );
server.use("/", homeRoutes);
server.use("/posts", postRoutes);

server.use((req, res) => {
  res.status(404).render("404");
});

module.exports = server;
