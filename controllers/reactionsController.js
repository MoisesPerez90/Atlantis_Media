const mongoose = require("mongoose");
const { Reaction, Thought } = require("../models");

module.exports = {
  async createReaction(req, res) {
    try {
      const reaction = await Reaction.create(req.body);
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: reaction } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({
        _id: req.params.id,
      });

      if (!reaction) {
        return res.status(404).json({ message: "Reaction not found" });
      }

      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: reaction._id } } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
