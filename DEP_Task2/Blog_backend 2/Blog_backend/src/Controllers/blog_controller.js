const UserModel = require("../models/auth_model");
const BlogModel = require("../models/blog_model");
const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const crypto = require("crypto");
//const bucket = require("../Config/firebase");
const path = require("path");
const imagekit = require("../Config/imageKitconfig");

class BlogController {
  static createBlog = async (req, res) => {
    try {
      const { title, content, filePath } = req.body; // Expecting filePath in the request body

      let imageUrl = null;
      if (filePath) {
        // Check if the filePath is absolute or relative
        const fullFilePath = path.isAbsolute(filePath)
          ? filePath
          : path.join(__dirname, filePath);

        // Read the file from the filesystem
        const fileContent = fs.readFileSync(fullFilePath);

        // Uploading file to ImageKit
        const uploadResponse = await imagekit.upload({
          file: fileContent.toString("base64"), // Required. Base64 or binary file
          fileName: path.basename(fullFilePath), // Required. Image name
          folder: "/blog_images", // Optional. Folder path in ImageKit storage
        });

        // Construct the public URL of the uploaded file
        imageUrl = uploadResponse.url;
      }

      // Create a new blog entry
      const newBlog = new BlogModel({
        title,
        content,
        image: imageUrl,
      });

      const blog = await BlogModel.create(newBlog);
      res.json({ status: true, blog });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: error.toString() });
    }
  };
  static getAllBlogs = async (req, res) => {
    try {
      const blogs = await BlogModel.find();
      res.json({ status: true, blogs });
    } catch (error) {
      res.json(error);
    }
  };

  static getBlogById = async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await BlogModel.findOne({ _id: id });
      if (!blog) {
        res.json({ message: "No blog avaliable" });
      } else {
        res.json({ status: true, blog });
      }
    } catch (error) {
      res.json(error);
    }
  };
  static deleteBlogById = async (req, res) => {
    try {
      const { id } = req.params;
      await BlogModel.findOneAndDelete({ _id: id });
      res.json({
        status: true,
        message: "Delete Successfully",
      });
    } catch (error) {
      res.json(error);
    }
  };
  static updateBlogById = async (req, res) => {
    try {
      const { id } = req.params;

      const blog = await BlogModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json({ blog });
    } catch (error) {
      res.json(error);
    }
  };

  static getAllblogsbyUser = async (req, res) => {
    try {
      const { userId } = req.body;

      // Find the user
      const user = await UserModel.findOne({ _id: userId });

      if (!user) {
        // Return a 404 status code if the user is not found
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      } else {
        const blogs = await BlogModel.find({ author: userId }).populate(
          "author",
          "username email"
        );
        res.json({ blogs });
      }
    } catch (error) {
      res.json({
        error: error.toString(),
      });
    }
  };
}

module.exports = BlogController;
