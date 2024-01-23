//for functions
function home(blogPosts) {
  const title = "Blogging Website";
  const content =
    /*html*/
    ` 
    <h1>Blog Here</h1>
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

module.exports = { home };
