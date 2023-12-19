const { User } = require('../models');
const { signToken } = require('../utils/auth');

const userController = {
    // GET all users
    async getAllUsers (req, res) {
        try {
            const userData = await User.findAll();
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET one user by id
    async getOneUser (req, res) {
        try {
            const userData = await User.findByPk(req.params.id);
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST create new user
    async createUser (req, res) {
        try {
            const userData = await User.create(req.body);
            const token = signToken(userData);
            res.status(200).json({token, userData});
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // POST login user
    async loginUser (req, res) {
        try {
            const userData = await User.findOne({ where: { email: req.body.email } });
            if (!userData) {
                res.status(400).json({ message: 'Incorrect email or password, please try again' });
                return;
            }
            const correctPassword = await userData.checkPassword(req.body.password);
            if (!correctPassword) {
                res.status(400).json({ message: 'Incorrect email or password, please try again' });
                return;
            }
            const token = signToken(userData);
            res.status(200).json({ token, userData });
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // PUT update user by id
    async updateUser (req, res) {
        try {
            const userData = await User.update(req.body, {
                individualHooks: true,
                where: { id: req.params.id },
            })
            if (!userData[0]) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.status(200).json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser (req, res) {
        try {
            const userData = await User.destroy({
                where: { id: req.params.id },
            });
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;