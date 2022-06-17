const router = require('express').Router();

// Import the user model
const {
    getUsers,
    addUser,
    getUserByID,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// GET /api/users
router.route('/')
.get(getUsers)
.post(addUser);

// GET /api/users/:id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);

// POST /api/users/:id/friends
router.route('/:id/friends/:friendID')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;