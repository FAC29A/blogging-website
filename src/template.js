const { request } = require("express");

function home() {
  const title = "Blogging Website Home";
  const content =
    /*html*/
    `
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
      `;
  return layout(title, content);
}

function posts(blogPosts, errorsObject = {}, requestBody = {}) {
  const title = "Post Page";
  const content =
    /*html*/
    ` 
    <h1>Blog Posts</h1>
    <form action="/posts" method="POST">
        <div class="input">
            <label for="name">Name:</label><br>
            <input name="name" type="text" value="${
              requestBody.name ? sanitize(requestBody.name) : ""
            }">
            ${validation(errorsObject.nameError)}
        </div>
        <div class="input">
            <label for="blogpost">Type your post here:</label><br>
            <textarea name="blogpost" type="textarea" rows="4" columns="50">${
              requestBody.blogpost ? sanitize(requestBody.blogpost) : ""
            }</textarea>
            ${validation(errorsObject.postError)}
        </div class="input">
        <button type="submit">Submit</button>
    </form>   
    <div class="posted-blogs">
    ${blogPosts.map(postItem).join("")}
    </div>
    `;

  return layout(title, content);
}

function postItem(post) {
  return /*html*/ `
        <article id="${post.postId}">
        <div class="person-name"><h2>${sanitize(post.name)}</h2></div> 
        <div class="blog-post">${sanitize(post.blogpost)}</div>
        <div class="date">${post.displayDate}</div>
        <form action="/posts/delete/${post.postId}"" method="post">
          <button type="submit">Delete</div>
        </form>
        </article>
    `;
}

function layout(title, content) {
  return /*html*/ `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        ${content}
      </body>
    </html>
    `;
}
function sanitize(unsafe) {
  return unsafe.replace(/</g, "&lt;");
}

function validation(errorMessage) {
  if (errorMessage) {
    return /*html*/ `
        <span>${errorMessage}</span>
        `;
  } else {
    return "";
  }
}
module.exports = { posts, home };
