const express = require("express");
const router = express.Router();
const helper = require("../helper");
const model = require("../../model/blogs")
const blogPosts = [];
const errorsObject = {};

//old server route
// router.get("/", (request, response) => {
//   const requestBody = {};
//   response.render("posts", {
//     title: "posts",
//     blogPosts,
//     errorsObject,
//     requestBody,
//     helper,
//   });
// });

//new server route- need to finish working this out!!
router.get("/", (request, response) => {
  const blogs = model.displayBlogs();
  // const requestBody = {};
  response.render("posts", {
    title: "posts",
    blogPosts,
    errorsObject,
    requestBody,
    helper,
  });
});

//old server route
// router.post("/", (request, response) => {
//   const requestBody = request.body;
  // const name = request.body.name;
  // const blogpost = request.body.blogpost;

  //validation and error handling
  // const errorsObject = {};
  // if (!name) {
  //   errorsObject.nameError = "please enter your name";
  // }
  // if (!blogpost) {
  //   errorsObject.postError = "please enter a message";
  // }

  // if (Object.keys(errorsObject).length > 0) {
  //   response.render("posts", {
  //     title: "posts",
  //     blogPosts,
  //     errorsObject,
  //     requestBody,
  //     helper,
  //   });
  // } else {
  //   const date = new Date();
  //   let displayDate = date.toDateString();
  //   const postId = date.getTime();
  //   blogPosts.push({ name, blogpost, postId, displayDate });
  //response.redirect("/posts");
  // }
// });

//new server route
router.post("/", (request, response) => {
  const requestBody = request.body;
  const blogEntry = {
    name: requestBody.name,
    blogpost: requestBody.blogpost
  }
  model.createBlog(blogEntry);
  response.redirect("/posts");
});


router.post("/delete/:id", (req, res) => {
  const postId = Number(req.params.id);
  const index = blogPosts.findIndex((post) => post.postId === postId);
  if (index > -1) {
    blogPosts.splice(index, 1);
    res.redirect("/posts");
  } else {
    res.status(404).render("404", { title: "Route doesn't exist" });
  }
});

module.exports = router;
