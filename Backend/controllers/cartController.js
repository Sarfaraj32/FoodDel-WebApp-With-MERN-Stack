import UserModel from "../models/userModel.js";

// Add items tp User Cart
const addToCart = async (req, res) => {
  try {
    let userData = await UserModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove items from User Cart
const removeFromCart = async (req, res) => {};

// Fetch User Cart Data
const getCart = async (req, res) => {};

export { addToCart, removeFromCart, getCart };
