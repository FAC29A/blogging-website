const express = require("express");
const router = express.Router();
const { posts } = require("../template");
const blogPosts = [];

router.get("/", (request, response) => {
  const body = posts(blogPosts);
  response.send(body);
});

router.post("/", (request, response) => {
  const name = request.body.name;
  const blogpost = request.body.blogpost;
  const date = new Date();
  let displayDate = date.toDateString();
  const postId = date.getTime();
  blogPosts.push({ name, blogpost, postId, displayDate }); 
  response.redirect("/posts");
});


module.exports = {
    router: router, 
    blogPosts: blogPosts
}
