const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Carrito=sequelize.define("Carrito",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    total:{
        type:DataTypes.DECIMAL,

    }


})

module.exports=Carrito