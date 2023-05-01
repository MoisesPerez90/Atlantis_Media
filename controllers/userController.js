const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .select("-__v")
        .populate("thoughts", "-__v")
        .populate({
          path: "friends",
          select: "-__v -thoughts",
        });
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id })
        .select("-__v")
        .populate("thoughts", "-__v")
        .populate("friends", "-__v");
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const result = await User.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 1) {
        res.json({ message: "User deleted" });
      } else {
        res.json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
