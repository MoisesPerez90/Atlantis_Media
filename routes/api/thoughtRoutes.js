const router = require("express").Router();

const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtsController");

const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionsController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:id")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:id").delete(deleteReaction);

module.exports = router;
