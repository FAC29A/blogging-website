const express = require('express')
const router = express.Router();

// add router server routes for home

router.get("/", (request, response) => {
    
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
    </form>
    </body>
    </html>`
)
})


module.exports = router