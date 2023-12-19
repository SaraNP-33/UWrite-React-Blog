const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../../utils/auth');

const {createComment, updateComment, deleteComment} = require('../../controllers/comment-controllers');

router.route('/').post(authMiddleware,createComment);
router.route('/:id').put(authMiddleware,updateComment).delete(authMiddleware,deleteComment);

module.exports = router;