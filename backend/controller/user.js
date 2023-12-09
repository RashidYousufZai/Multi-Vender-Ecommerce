const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const catchAsyncError = require("../middleware/catchAsyncError");
const multer = require("multer");
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");

exports.signup = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        }
      });

      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const newUser = new User({
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    });

    await newUser.save();

    console.log(newUser);

    // Respond with success
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return next(new ErrorHandler(error.message, 500));
  }
});
