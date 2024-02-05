const db = require("../database/db")

//create functions here:
  
const create_blog = db.prepare(/*sql*/ `
    INSERT into blog_posts (name, blog_post)
    VALUES($name, $blogPost)
    RETURNING name, blog_post, created_at, likes
`)

function createBlog (blog) {
    return createBlog.get(blog)
}

//read functions here:
const read_blogs = db.prepare(/*sql*/ `
    SELECT name, blog_post, created_at, likes
    FROM blog_posts
`)

function displayBlogs () {
    return read_blogs.all()
}
//update functions here:


//Testing the upstream in remote 






//delete functions here:






//EXPORT YOUR FUNCTIONS!!

module.exports = {
    createBlog,
    displayBlogs
}




