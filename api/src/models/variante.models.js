const {DataTypes}=require("sequelize")
const sequelize = require('../database');


const variante= sequelize.define('variante',
{ 
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
},
 color:{
    type:DataTypes.STRING,

 },
 talle:{
    type:DataTypes.STRING,
},


stock:{
   type:DataTypes.INTEGER,

}

})
module.exports=variante