const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            required: true,
        },
        profile_pic: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://via.placeholder.com/150',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            required: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserLoginData) => {
                newUserLoginData.password = await bcrypt.hash(newUserLoginData.password, 10);
                return newUserLoginData;
            },
            beforeUpdate: async (updatedUserLoginData) => {
                updatedUserLoginData.password = await bcrypt.hash(updatedUserLoginData.password, 10);
                return updatedUserLoginData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;