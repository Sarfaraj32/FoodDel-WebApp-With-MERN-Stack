import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Not Exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, data: token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Checking is user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      res.json({ success: false, message: "User Already Exists" });
    }
    // Validating email format and strong password
    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "Please Enter A Valid Email" });
    }
    if (password.length < 8) {
      res.json({ success: false, message: "Please Enter A Strong Password" });
    }
    // Hasing User Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, data: token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
