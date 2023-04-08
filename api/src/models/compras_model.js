const { DataTypes } = require('sequelize');



const Compras=async (sequelize)=>await sequelize.define(
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