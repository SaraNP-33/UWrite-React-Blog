const express = require('express');
const router = express.Router();
const { getAllPosts, getOnePost }= require('../controllers/home-controllers');

router.route('/').get(getAllPosts);
router.route('/:id').get(getOnePost);


module.exports = router;