const express = require('express');
const userRoutes = require('./user-routes');
//const postRoutes = require('./post-routes');
//const commentRoutes = require('./comment-routes');

const router = express.Router();

router.use('/users', userRoutes);
//router.use('/posts', postRoutes);
//router.use('/comments', commentRoutes);

module.exports = router;
