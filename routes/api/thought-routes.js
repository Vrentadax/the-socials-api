const router = require('express').Router();

// Import the user model
const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// GET /api/thoughts
router.route('/')
.get(getThoughts)

// POST /api/thoughts
router.route('/:userId')
.post(addThought)

// GET /api/thoughts/:id
router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

// POST /api/thoughts/:id/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

// DELETE /api/thoughts/:id/reactions
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;