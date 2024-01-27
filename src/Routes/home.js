const express = require("express");
const router = express.Router();
const { home } = require("../template");

router.get("/", (request, response) => {
  response.render("index");
  // const body = home();
  // response.send(body);
});

module.exports = router;
