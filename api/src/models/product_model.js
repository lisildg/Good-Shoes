const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const product=sequelize.define(
    'product',{
       id: {type:DataTypes.UUIDV1,
        primarykey:true,
        },

     name:{
        type:DataTypes.TEXT,
        allowNull:false,
     },
     price:{
        type:DataTypes.NUMBER,
     }   

    }
)