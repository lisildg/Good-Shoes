const {DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../database');

const review = sequelize.define(
    'review',{
        id:{
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        comentary:{
            type:DataTypes.TEXT
        },
        ranking:{
            type: DataTypes.INTEGER
        }
    }
)