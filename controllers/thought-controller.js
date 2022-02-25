const { Thought, User } = require("../models");

const thoughtController = {
  // Add thought to user.
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        // Add the thought to a user.
        return User.findByIdAndUpdate(
          { _id: params.userId },
          // User $push method to add thought's _id to the specific user we want to update - adds data to an array.
          { $push: { comments: _id } },
          // Means we are receiving the updated user.
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};
