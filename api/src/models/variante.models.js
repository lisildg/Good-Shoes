const {DataTypes}=require("sequelize")
const sequelize = require('../database');


const variante= sequelize.define('variante',
{ 
  id_variante:{
    type:DataTypes.INTEGER,
    primaryKey:true,
},
 color:{
    type:DataTypes.STRING,

 },
 talle:{
    type:DataTypes.STRING,
} 
        

})
module.exports=variante