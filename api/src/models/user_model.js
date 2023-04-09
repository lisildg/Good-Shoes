const {DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../database');

const user = sequelize.define(
    'user',{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        city:{
            type: DataTypes.STRING
        },
        phone:{
            type:DataTypes.STRING,
            unique: true
        },
        rol:{
            type: DataTypes.ENUM('Admin', 'Client')
        },
      
    }
)

module.exports=user