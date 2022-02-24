const { Shcema, model, Types } = require("mongoose");
const { schema } = require("./User");
// Need date format.

const ThoughtSchema = new schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLenght: 280,
  },
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
