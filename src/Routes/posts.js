const express = require('express')
const router = express.Router();
const blogPosts = [];

// add router server routes for posts

router.get("/", (request, response) => {
    const list = blogPosts.map((post) => {
        return `
        <article>
        <div class="person-name"><h2>${post.name}</h2></div> 
        <div class="blog-post">${post.blogpost}</div>
        </article>
        `;
      });
    response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Blogging Website</title>
    </head>
    <body>
    <h1>Blog Posts</h1>
    <form action="/posts" method="POST">
      <div class="input">
        <label for="name">Name:</label><br>
        <input name="name" type="text">
      </div>
      <div class="input">
        <label for="blogpost">Type your post here:</label><br>
        <textarea name="blogpost" type="textarea" rows="4" columns="50"></textarea>
      </div class="input">
        <button type="submit">Submit</button>
    </form>
    <div class="posted-blogs">
    ${list.join("")}
    </div>
    </body>
    </html>`
)
})

router.post("/", (request, response) => {
    const name = request.body.name;
    const blogpost = request.body.blogpost;
    blogPosts.push({ name, blogpost }); // 
    response.redirect("/posts");
});

module.exports = router
