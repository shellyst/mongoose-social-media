const { User } = require("../models");

const userController = {
  // Get all users.
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__V")
      .stort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
