const express = require("express");
const router = express.Router();
// const { home } = require("../template");

router.get("/", (request, response) => {
  response.render("index", { title: "Home" });
});

module.exports = router;
