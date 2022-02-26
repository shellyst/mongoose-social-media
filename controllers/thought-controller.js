const { Thought, User } = require("../models");

const thoughtController = {
  // Get all thoughts.
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get thought by id.
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thoughts found with this id!" });
          return;
        }

        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },

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

  updateThought({ body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Update an existing though.
  // Passing params as a parameter, so make sure pass it to addReaction.
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughId },
      { $push: { reactions: body } },
      { new: true, reunValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //   Uses ${pull} operator to remove the specific reply from the replies where reactionId matches the value of params.reactionId.
  removeReaction({ params }, res) {
    Thought.findOneAndDelete(
      { _id: params.thoughtId },
      {
        $pull: {
          reactions: { reactionId: params.reactionId },
        },
      },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  //   Remove thought.
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          return res
            .status(404)
            .json({ message: "No thought found with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
