const Product=require("./product_model")
const user=require("./user_model")
const payment=require("./payment_moedl")
const review=require("./review_model")
const variante=require("./variante.models")

module.exports={
    models:{
        Product,user,payment,review,variante
    }
}