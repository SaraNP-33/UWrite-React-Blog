const express = require('express');
const router = express.Router();
const {getAllUsers,getOneUser,createUser,loginUser,updateUser,deleteUser} = require('../../controllers/user-controllers');
const { authMiddleware } = require('../../utils/auth');

router.route('/').get(getAllUsers).post(createUser)
router.route('/login').post(loginUser);
router.route('/:id').get(authMiddleware,getOneUser).put(authMiddleware, updateUser).delete(authMiddleware, deleteUser);

module.exports = router;