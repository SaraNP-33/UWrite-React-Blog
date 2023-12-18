const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model{}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false, 
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,  
    },
    date_create:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:()=>DataTypes.NOW
    },
    post_pic:{ 
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:'https://via.placeholder.com/150'
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    }
},{
    sequelize,
    modelName:'post'
})

module.exports=Post;