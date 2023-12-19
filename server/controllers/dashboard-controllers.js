const { Post } = require('../models');

const dashboardController = {
    async getUserPosts (req, res) {
       
        try {
            const userPost = await Post.findAll({
                where: {
                    user_id: req.user.id
                }
            });
           
            res.status(200).json(userPost);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async getOneUserPost (req, res) {
       
        try {
            const postData = await Post.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (!postData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.status(200).json(postData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = dashboardController;