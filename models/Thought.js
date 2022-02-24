const { Schema, model, Types } = require("mongoose");
// Need date format.

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLenght: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Need to create this.
      get: (createAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual to get reaction count.

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
