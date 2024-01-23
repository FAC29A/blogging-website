const express = require("express");
const server = express();
const bodyParser = express.urlencoded();
const { home } = require("./template.js");
const staticHandler = express.static("public");

//require home and posts modules and edit e.g.

//routes
const homeRoutes = require("./Routes/home");
const postRoutes = require("./Routes/posts");

server.use(bodyParser);
server.use(staticHandler);
server.use("/", homeRoutes);
server.use("/posts", postRoutes.router);

// server.get("/", (request, response) => {
//     response.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="/style.css">
//     <title>Blogging Website</title>
//     </head>
//     <body>
//     <h1>Blog Here</h1>
//     <form action="/posts" method="POST">
//       <div class="input">
//         <label for="name">Name:</label><br>
//         <input name="name" type="text">
//       </div>
//       <div class="input">
//         <label for="blogpost">Type your post here:</label><br>
//         <textarea name="blogpost" type="textarea" rows="4" columns="50"></textarea>
//       </div class="input">
//         <button type="submit">Submit</button>
//     </form>
//     </body>
//     </html>`
// )
// })

// server.get("/posts", (request, response) => {
//     const list = blogPosts.map((post) => {
//         return `
//         <article>
//         <div class="person-name"><h2>${post.name}</h2></div>
//         <div class="blog-post">${post.blogpost}</div>
//         </article>
//         `;
//       });
//     response.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="/style.css">
//     <title>Blogging Website</title>
//     </head>
//     <body>
//     <h1>Blog Posts</h1>
//     <form action="/posts" method="POST">
//       <div class="input">
//         <label for="name">Name:</label><br>
//         <input name="name" type="text">
//       </div>
//       <div class="input">
//         <label for="blogpost">Type your post here:</label><br>
//         <textarea name="blogpost" type="textarea" rows="4" columns="50"></textarea>
//       </div class="input">
//         <button type="submit">Submit</button>
//     </form>
//     <div class="posted-blogs">
//     ${list.join("")}
//     </div>
//     </body>
//     </html>`
// )
// })

// server.post("/posts", bodyParser, (request, response) => {
//     const name = request.body.name;
//     const blogpost = request.body.blogpost;
//     blogPosts.push({ name, blogpost }); //
//     response.redirect("/posts");
// });

module.exports = server;
