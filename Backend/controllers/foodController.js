import FoodModel from "../models/foodModel.js";
import fs from "fs";

// Add food items
const addFood = async (req, res) => {
  // if (!req.file) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Image file is required." });
  // }
  let image_filename = `${req.file.filename}`;

  const food = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Item Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food Item Not Added" });
  }
};

// all foodlist
const listFood = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood };
