const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../../utils/auth');

const {createPost,updatePost,deletePost} = require('../../controllers/post-controllers');

router.route('/').post(authMiddleware,createPost);
router.route('/:id').put(authMiddleware,updatePost).delete(authMiddleware,deletePost);

module.exports = router;