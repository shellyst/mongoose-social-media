const router = require("express").Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

router.route("/:userId").put(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
// After deleting a thought, you need to know what user the thought originated from.
router.route("/:userId/:thoughtId").delete(removeThought);

// "Go to this user, look at this thought, delete this reaction."
router.route("/:userId/:thoughtId/:replyId").delete(removeReaction);


module.exports = router;
