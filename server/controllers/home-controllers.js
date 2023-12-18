const { User, Post, Comment } = require('../models');

const homeController = {    
    // GET all posts for homepage
    async getAllPosts  (req, res) {
        try {
            const postData = await Post.findAll({
                include: [User],
            });
            res.status(200).json(postData)
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // GET one post
    async getOnePost (req, res) {
        try {
            const postData = await Post.findByPk(req.params.id, {
                include: [
                    User,
                    {
                        model: Comment,
                        include: [User],
                    }
                ],
            });
            if (!postData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            const post = postData.get({ plain: true });
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = homeController;