const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, "Please fill a valid email address."],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      getters: true,
      validators: true,
    },
  }
);

// Virtual which retreives the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
