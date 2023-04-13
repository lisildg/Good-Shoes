const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Product=sequelize.define(
    'Products',{
       id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        },
     name:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     descripcion:{
      type:DataTypes.STRING,
      
     },
     price:{
        type:DataTypes.DECIMAL,
     }   

    }
)


module.exports=Product