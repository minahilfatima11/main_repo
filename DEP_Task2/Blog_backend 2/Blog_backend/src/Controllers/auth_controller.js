const UserModel = require("../models/auth_model");
const { find } = require("../models/blog_model");

class AuthController {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const finduser = await UserModel.findOne({ email });
      if (finduser && (await finduser.comparePassword(password))) {
        res.json({
          status: true,
          message: "Logged in successfully",
          user: finduser,
        });
      } else {
        res.json({
          status: false,
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  };

  static register = async (req, res) => {
    try {
      var email = req.body.email;
      const finduser = await UserModel.findOne({ email });
      if (!finduser) {
        var newUser = await UserModel.create(req.body);
        res.json({
          status: true,
          user: newUser,
        });
      } else {
        res.json({
          status: false,
          message: "User already exist",
        });
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };
}
module.exports = AuthController;
