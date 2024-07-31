const express = require("express");
const BlogController = require("../Controllers/blog_controller");
const upload = require("../middleware/upload");

const blogrouter = express.Router();
// Route to createBlogs
blogrouter.post(
  "/createblog",
  BlogController.createBlog
);
// Route to allblogs
blogrouter.get("/Allblogs", BlogController.getAllBlogs);
// Route to get a blog by ID
blogrouter.get("/getBlogbyId/:id", BlogController.getBlogById);

// Route to update a blog by ID
blogrouter.put(
  "/updateBlogbyId/:id",

  BlogController.updateBlogById
);
// Route to delete a blog by ID
blogrouter.delete("/deleteBlogbyId/:id", BlogController.deleteBlogById);
// Route to allblogs of users by ID
blogrouter.get("/getAllblogsbyUser", BlogController.getAllblogsbyUser);
module.exports = blogrouter;
