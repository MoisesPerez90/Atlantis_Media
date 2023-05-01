const { Schema, model } = require("mongoose");
const { reactionSchema } = require("./Reaction");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   The user that created this thought
  username: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  //   Reactions are similar to likes
  reactions: [reactionSchema],
});

thoughtSchema.virtual("formattedCreatedAt").get(function () {
  return this.createdAt.toISOString(); // format the date as an ISO string
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
