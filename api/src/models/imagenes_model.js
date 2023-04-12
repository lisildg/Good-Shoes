const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Imagenes=sequelize.define(
    'Imagenes',{
       id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        },
     url:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     

    }
)


module.exports=Imagenes