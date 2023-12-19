const { Comment } = require('../models');

const commentController = {
    async createComment (req, res) {
      
        try {
            const commentData = await Comment.create({
                ...req.body,
                user_id: req.user.id
            });
            
            res.status(200).json(commentData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async updateComment (req, res) {
        try {
            const commentData = await Comment.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            if (!commentData) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.status(200).json(commentData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async deleteComment (req, res) {
        try {
            const commentData = await Comment.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (!commentData) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.status(200).json(commentData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = commentController;