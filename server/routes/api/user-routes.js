const express = require('express');
const router = express.Router();
const {getAllUsers,getOneUser,createUser,loginUser,updateUser,deleteUser} = require('../../controllers/user-controllers');

router.route('/').get(getAllUsers).post(createUser)
router.route('/login').post(loginUser);
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;