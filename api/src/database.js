const Sequelize = require('sequelize');
require('dotenv').config()
const{
    DBHOST,
    DBNAME,
    DBUSER,
    DBPASS, 
    PORTDB
} = process.env

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS,{
    host: DBHOST,
    dialect: 'postgres',
    port: PORTDB,
    dialectOptions:{
        pool:{
            acquire: 30000,
            idle: 10000
        },
    },
    logging: false,
});

sequelize.authenticate()
.then(()=>{
    console.log('Conexion exitosa con la db PostgreSQL <3')
   

})
.catch(err =>{
    console.error('No se puedo establer conexion con la db PostgreSQL :(   :', err.message);
})

module.exports = sequelize