//for functions
const repetitiveHtml = /*html*/ `
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
</form>`;

function home() {
  const title = "Blogging Website Home";
  const content =
    /*html*/
    `
      ${repetitiveHtml} 
      `;
  return layout(title, content);
}

function posts(blogPosts) {
  const title = "Post Page";
  const content =
    /*html*/
    ` 
    ${repetitiveHtml}    
    <div class="posted-blogs">
    ${list.join("")}
    </div>
    
    `;

  return layout(title, content);
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

module.exports = { posts, home };
