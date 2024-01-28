const express = require("express");
const router = express.Router();
const helper = require("../helper");
// const { posts } = require("../template");
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
    console.log(errorsObject);
    console.log(requestBody);
    console.log(blogPosts);
    // const errorBody = posts(blogPosts, errorsObject, request.body);
    // response.status(404).send(errorBody);
    // try to use as middleware. a seperate function first check request if the body and name and blog post is empty, if any of the thing is empty, return
    // erro object.   on the server side
  } else {
    const date = new Date();
    let displayDate = date.toDateString();
    const postId = date.getTime();
    blogPosts.push({ name, blogpost, postId, displayDate });
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

module.exports = {
  router: router,
  blogPosts: blogPosts,
};
