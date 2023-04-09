const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Compras=sequelize.define(
    'Compras',{
       id: {
        type:DataTypes.UUID,
        primaryKey:true,
        },
     name:{
        type:DataTypes.TEXT,
        allowNull:false,
     },
     

    }
)


module.exports=Compras