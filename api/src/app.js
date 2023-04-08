const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ruta_principal = require("./routes/route-index");

const app = express();
console.log(2)

app.use(morgan("dev"));

app.use(ruta_principal);


module.exports = app;
