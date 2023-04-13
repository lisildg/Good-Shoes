const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Category= sequelize.define("Category",{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING
    }
})



module.exports=Category