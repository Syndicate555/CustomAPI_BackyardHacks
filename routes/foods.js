const express = require("express");
const router = express.Router();

// @route GET api/foods
// @desc get all users foods
// @access Private
router.get("/", (req, res) => {
  res.send("Get all food");
});

// @route POST api/foods
// @desc Add new food
// @access Private

router.post("/", (req, res) => {
  res.send("Add food");
});

// @route PUT api/foods/:id
// @desc Update food
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update foods");
});

// @route DELETE api/foods/:id
// @desc Delete food
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete foods");
});

module.exports = router;
