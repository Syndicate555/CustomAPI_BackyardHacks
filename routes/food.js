const express = require("express");
const router = express.Router();

// @route GET api/foods
// @desc get all users foods
// @access Private
router.post("/", (req, res) => {
  res.send("Get all food");
});

router.post("/", (req, res) => {
  res.send("Add food");
});

// @route GET api/foods
// @desc get all users foods
// @access Private
router.post("/", (req, res) => {
  res.send("Get all food");
});
