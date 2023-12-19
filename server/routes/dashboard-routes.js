const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../utils/auth');
const{ getUserPosts, getOneUserPost }=require('../controllers/dashboard-controllers');

router.route('/').get(authMiddleware, getUserPosts);
router.route('/:id').get(authMiddleware, getOneUserPost);

module.exports = router;