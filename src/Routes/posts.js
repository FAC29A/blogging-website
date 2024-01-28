const express = require("express");
const router = express.Router();
const helper = require("../helper");
const blogPosts = [];
const errorsObject = {};

router.get("/", (request, response) => {
  // Not the best solution to declare empty object requestBody here
  const requestBody = {};
  response.render("posts", {
    title: "posts",
    blogPosts,
    errorsObject,
    requestBody,
    helper,
  });
  // const body = posts(blogPosts);
  // response.send(body);
});

router.post("/", (request, response) => {
  const requestBody = request.body;
  const name = request.body.name;
  const blogpost = request.body.blogpost;

  //validation and error handling
  const errorsObject = {};
  if (!name) {
    errorsObject.nameError = "please enter your name";
  }
  if (!blogpost) {
    errorsObject.postError = "please enter a message";
  }

  if (Object.keys(errorsObject).length > 0) {
    response.render("posts", {
      title: "posts",
      blogPosts,
      errorsObject,
      requestBody,
      helper,
    });
    // const errorBody = posts(blogPosts, errorsObject, request.body);
    // response.status(404).send(errorBody);
  } else {
    const date = new Date();
    let displayDate = date.toDateString();
    const postId = date.getTime();
    let likesCount = 0;
    blogPosts.push({ name, blogpost, postId, displayDate, likesCount });
    response.redirect("/posts");
  }
});

router.post("/delete/:id", (req, res) => {
  const postId = Number(req.params.id);
  const index = blogPosts.findIndex((post) => post.postId === postId);
  if (index > -1) {
    blogPosts.splice(index, 1);
    res.redirect("/posts");
  } else {
    res.status(404).send("Post not found");
  }
});

router.post("/act/:id", (req, res) => {
  const postId = Number(req.params.id);
  const action = req.body.action;

  console.log("Received POST request to /posts/:id/act", { postId, action });
  console.log("Received JSON payload:", req.body);

  const index = blogPosts.findIndex((post) => post.postId === postId);
  if (index !== -1) {
    if (action === "Like") {
      blogPosts[index].likesCount++;
    } else if (action === "Unlike") {
      blogPosts[index].likesCount--;
    }
    res.redirect("/posts");
    // Send an empty response
  }
});

module.exports = {
  router: router,
  blogPosts: blogPosts,
};
