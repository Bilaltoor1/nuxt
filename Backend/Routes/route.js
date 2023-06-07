const express = require('express');
const blogController = require('../Controller/handler')
const { updateBlog } = require('../Controller/handler');
const router = express.Router();

router
    .route('/all-blogs')
    .get(blogController.getAllBlogs)
    .post(blogController.createBlog);

router
    .route('/blog/:id')
    .get(blogController.getBlog)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog)

module.exports = router