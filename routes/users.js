const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send("error" + error);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    sex: req.body.sex,
    state: req.body.state,
  });

  try {
    const a1 = await user.save();
    res.json(a1);
  } catch (error) {
    res.send("error" + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("error" + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.state = req.body.state;
    user.name = req.body.name;
    const user1 = await user.save();
    res.json(user1);
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const user1 = await user.remove();
    res.json(user1);
  } catch (error) {
    res.send("error");
  }
});

module.exports = router;
