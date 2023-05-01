const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().select("-__v");
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const { username } = req.body;
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "Thought created, but found no user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const result = await Thought.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 1) {
        res.json({ message: "Thought deleted" });
      } else {
        res.json({ message: "Thought not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
