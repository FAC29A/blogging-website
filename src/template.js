const initialHTML = /*html*/ `
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
  const title = 'Blogging Website Home';
  const content =
    /*html*/
    `
    ${initialHTML} 
      `;
  return layout(title, content);
}

function posts(blogPosts) {
  const title = 'Post Page';
  const content =
    /*html*/
    ` 
    ${initialHTML}    
    <div class="posted-blogs">
    ${blogPosts.map(postItem).join('')}
    </div>
    `;

  return layout(title, content);
}

function postItem(post) {
  return /*html*/ `
        <article id="${post.postId}">
        <div class="person-name"><h2>${post.name}</h2></div> 
        <div class="blog-post">${post.blogpost}</div>
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

module.exports = { posts, home };
