const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  const url = process.env.MONGODB_URL;
  try {
    console.log(url);
    const conn = mongoose.connect(url);
    console.log("db connected successfully");
  } catch (error) {
    throw new Error(`database error : ${error}`);
  }
};
module.exports = dbConnect;
