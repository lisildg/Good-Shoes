const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ruta_principal = require("./routes/route-index");
const app = express();
const sequelize = require("./database")
const Product=require("./models/product_model")
app.use(morgan("dev"));

app.use(ruta_principal);


sequelize.sync({force:true})
Product.sync()

module.exports = app;
