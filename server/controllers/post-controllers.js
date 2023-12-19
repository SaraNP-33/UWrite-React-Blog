const {Post} = require('../models');

const postController = {
    async createPost (req, res) {
        try {
            const postData = await Post.create({
                ...req.body,
                user_id: req.user.id
            
            });
            res.status(200).json(postData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async updatePost (req, res) {
        try {
            const postData = await Post.update(req.body, {
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
    },
    async deletePost (req, res) {
        try {
            const postData = await Post.destroy({
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

module.exports = postController;