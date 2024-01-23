const express = require("express");
const router = express.Router();
const { posts } = require("../template");
const blogPosts = [];

// add router server routes for posts

router.get("/", (request, response) => {
  const body = posts(blogPosts);
  response.send(body);
});

router.post("/", (request, response) => {
  const name = request.body.name;
  const blogpost = request.body.blogpost;
  blogPosts.push({ name, blogpost }); //
  response.redirect("/posts");
});

module.exports = {
    router: router, 
    blogPosts: blogPosts
}
