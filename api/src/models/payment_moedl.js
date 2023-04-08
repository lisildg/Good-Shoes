const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const payment = sequelize.define(
    'payment',{
        id:{
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        }
    }
)