const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: {
      type: String, // Field to store the image URL
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;
